var background = document.getElementById("background");

function turnRed() {
    activeButton = document.getElementById("red-button");
    activeColor = "#b1372b";
    lightness = "#fff";
    inactiveButton = [document.getElementById("blue-button"), document.getElementById("green-button"), document.getElementById("white-button"), document.getElementById("black-button")];
}
function turnBlue() {
    activeButton = document.getElementById("blue-button");
    activeColor = "#5c9abc";
    lightness = "#000";
    inactiveButton = [document.getElementById("red-button"),document.getElementById("green-button"), document.getElementById("white-button"), document.getElementById("black-button")];
}
function turnGreen() {
    activeButton = document.getElementById("green-button");
    activeColor = "#b1cc3d";
    lightness = "#000";
    inactiveButton = [document.getElementById("red-button"), document.getElementById("blue-button"), document.getElementById("white-button"), document.getElementById("black-button")];
}
function turnWhite() {
    activeButton = document.getElementById("white-button");
    activeColor = "#fff";
    lightness = "#000";
    inactiveButton = [document.getElementById("red-button"), document.getElementById("blue-button"), document.getElementById("green-button"), document.getElementById("black-button")];
}
function turnBlack() {
    activeButton = document.getElementById("black-button");
    activeColor = "#000";
    lightness = "#fff";
    inactiveButton = [document.getElementById("red-button"), document.getElementById("blue-button"), document.getElementById("white-button"), document.getElementById("green-button")];
}
function activateButton() {
    document.getElementById("background").style.backgroundColor = activeColor;
    activeButton.style.border = "solid 1px";
    activeButton.style.borderColor = lightness;
    inactiveButton[0].style.border = "none";
    inactiveButton[1].style.border = "none";
    inactiveButton[2].style.border = "none";
    inactiveButton[3].style.border = "none";
    document.getElementById("background").style.color = lightness;
    document.getElementById("header").style.color = lightness;
}