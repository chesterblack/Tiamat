var background = document.getElementById("background");
var activeButton = sessionStorage.getItem("activeButton");
var activeColor = sessionStorage.getItem("activeColor");
var lightness = sessionStorage.getItem("lightness");
var bgswitch = 0;
if (lightness === "#000") {
  var oppositeLightness = "#eaeaea"
} else {var oppositeLightness = "#383838"};

if (activeColor === '#b1372b') {activeButton = document.getElementById("red-button");
} else if (activeColor === '#5c9abc') {activeButton = document.getElementById("blue-button");
} else if (activeColor === '#b1cc3d') {activeButton = document.getElementById("green-button");
} else if (activeColor === '#000') {activeButton = document.getElementById("black-button");
} else if (activeColor === '#fff') {activeButton = document.getElementById("white-button");}

document.documentElement.style.setProperty("--lightnesscolor", lightness);
document.documentElement.style.setProperty("--oppositeLightnessColor", oppositeLightness);
document.documentElement.style.setProperty("--activeColor", activeColor);
background.style.backgroundColor = activeColor;

activeButton.style.border = "solid 1px var(--lightnesscolor)";
activeButton.style.borderColor = lightness;

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
    background.style.backgroundColor = activeColor;
    // background.classList.toggle("scale-up-hor-left");
    activeButton.style.border = "solid 1px";
    activeButton.style.borderColor = lightness;
    inactiveButton[0].style.border = "none";
    inactiveButton[1].style.border = "none";
    inactiveButton[2].style.border = "none";
    inactiveButton[3].style.border = "none";
    document.documentElement.style.setProperty("--lightnesscolor", lightness);
    document.documentElement.style.setProperty("--activeColor", activeColor);
    sessionStorage.setItem("activeColor",activeColor);
    sessionStorage.setItem("lightness",lightness);
    if (lightness === "#000") {
      var oppositeLightness = "#eaeaea"
    } else {var oppositeLightness = "#383838"};
    document.documentElement.style.setProperty("--oppositeLightnessColor", oppositeLightness);
    if (bgswitch === 0){
      bgswitch = 1;
    } else {
      bgswitch = 0;
    };
}

/*function hIn(obj) {
    if(activeButton = obj) {
        obj.innerHTML = "X";
        obj.style.margin = "0";
        obj.style.padding = "0";
        obj.style.color = lightness;
    }
}
function hOut(obj) {
    obj.innerHTML = "";
}*/
