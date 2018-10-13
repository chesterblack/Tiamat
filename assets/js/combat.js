var characters = [];

function newCharacter(){
    characters[characters.length] = {
        name:document.getElementsByName("nameInput")[0].value,init:document.getElementsByName("initInput")[0].value,
        health:document.getElementsByName("healthInput")[0].value
    };

    displayCharacters();
}

function healthEdit(i){

    if(characters[i].health == "DEAD"){}
    else{
        var damageAmount = document.getElementsByName("damage")[i].value;

        var newHealth = characters[i].health - damageAmount;

        if(newHealth < 1){
            newHealth = "DEAD";
        }

        characters[i].health = newHealth;

        displayCharacters();
    }
}

function displayCharacters(){
    var charactersLength = characters.length;

    var display = "";
    for (i = 0; i < charactersLength; i++){
        display += "<ul class='characters'><li><strong>NAME:</strong> " + characters[i].name + "</li><li><strong>INITIATIVE:</strong> " + characters[i].init + "</li>";
        if(characters[i].health){
            display += "<li><strong>HEALTH:</strong> " + characters[i].health + "<input type='text' name='damage'><button onclick='healthEdit("+i+")' class='damage'>DAMAGE</button></li>";
        }
        display += "</ul>";
    }
    display += "<button class='combat' onclick='resetCombat()'>RESET</button>";

    document.getElementById("order").innerHTML = display;
}

function resetCombat(){
    location.reload();
}

function orderCharacters(){
    var display = "";
    for (i=99;i>0;i--){
        for (j=0;j<characters.length;j++){
            if(characters[j].init==i){
                display += "<ul class='characters'><li><strong>NAME:</strong> " + characters[j].name + "</li><li><strong>INITIATIVE:</strong> " + characters[j].init + "</li>";
                if(characters[j].health){
                    display += "<li><strong>HEALTH:</strong> " + characters[j].health + "<input type='text' name='damage'><button onclick='healthEdit("+j+")' class='damage'>DAMAGE</button></li>";
                }
                display += "</ul>";
            }
        }
    }
    
    display += "<button class='combat' onclick='resetCombat()'>RESET</button>";
    document.getElementById("order").innerHTML = display;
    document.getElementsByClassName("setup")[0].style.display = "none";
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("new").click();
  }
});