var background = document.getElementById("background");
var background2 = document.getElementById("background2");
var activeButton = sessionStorage.getItem("activeButton");
var activeColor = sessionStorage.getItem("activeColor");
var lightness = sessionStorage.getItem("lightness");
var bgswitch = 0;
var transparancyColor = "rgba(255,255,255,0.3)"
if (activeColor === "#000") {
  var transparancyColor = "rgba(0,0,0,0.3);";
}
if (lightness === "#000") {
  var oppositeLightness = "#eaeaea";
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
background2.style.backgroundColor = activeColor;

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
    background.classList.toggle("scale-up-hor-left");
    background2.classList.toggle("scale-up-hor-left");
    if (bgswitch === 0){
      background.style.backgroundColor = activeColor;
      background2.style.zIndex = "-10";
      background.style.zIndex= "-5";
      bgswitch = 1;
      console.log(bgswitch);
    } else {
      background2.style.backgroundColor = activeColor;
      background.style.zIndex = "-10";
      background2.style.zIndex= "-5";
      bgswitch = 0;
      console.log(bgswitch);
    };
    if(activeColor === "#000"){
      transparancyColor = "rgba(255,255,255,0.1)";
    } else {
      transparancyColor = "rgba(0,0,0,0.3)";
    }
    document.documentElement.style.setProperty("--transparancyColor", transparancyColor);
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
