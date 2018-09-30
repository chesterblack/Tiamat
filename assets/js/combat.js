console.log("hello world");

var characters = [];
var characterName = "";

function newCharacter(){
    characters[characters.length] = {
        name:document.getElementsByName("nameInput")[0].value,init:document.getElementsByName("initInput")[0].value,
        health:document.getElementsByName("healthInput")[0].value
    };

    var charactersLength = characters.length;

    var display = "<ul>";
    for (i = 0; i < charactersLength; i++){
        display += "<li>NAME: " + characters[i].name + "<br /> INITIATIVE: " + characters[i].init + "<br /> HEALTH:" + characters[i].health + "<input type='text' name='damage'><button onclick='healthEdit(i)'>DAMAGE</button></li><hr>";
    }
    display += "</ul>";

    document.getElementById("order").innerHTML = display;
}

function healthEdit(i){
    var damageAmount = document.getElementsByName("damage")[0].value;

    var newHealth = characters[i].health - damageAmount;

    characters[i].health = newHealth;
}