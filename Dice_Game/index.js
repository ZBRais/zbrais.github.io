
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
function play() {

var randomNumber1 = getRandomIntInclusive(1, 6);
var randomNumber2 = getRandomIntInclusive(1, 6);

var dice_src1 = "./images/" +  "dice" + randomNumber1 + ".png";
var dice_src2 = "./images/" +  "dice" + randomNumber2 + ".png";


var image1 = document.getElementsByClassName("img1");
var image2 = document.getElementsByClassName("img2");

image1[0].setAttribute("src", dice_src1);
image2[0].setAttribute("src", dice_src2);

var h1_tag = document.getElementsByTagName("h1");

if(randomNumber1 === randomNumber2) {
    h1_tag[0].innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2) {
    h1_tag[0].innerHTML = "Player 1 Won!";
}
else {
    h1_tag[0].innerHTML = "Player 2 Won!";
}
}  




