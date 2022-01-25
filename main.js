var canvas = new fabric.Canvas('myCanvas');
var audio= document.getElementById("myAudio");
card_image="";

function birthday_card(){
fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
card_image=Img;
card_image.scaleToWidth(700);
card_image.scaleToHeight(510);
card_image.set({
top:0,
left:0
    });
canvas.add(card_image);
});
};
function playSound(){
	audio.play();
}
