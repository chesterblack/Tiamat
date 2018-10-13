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

function test2(){
    for (i=99;i>0;i--){
        for (j=0;j<characters.length;j++){
            if(characters[j].init==i){
                console.log(characters[j].name);
                // display += "<ul class='characters'><li><strong>NAME:</strong> " + characters[j].name + "</li><li><strong>INITIATIVE:</strong> " + characters[j].init + "</li>";
                // if(characters[j].health){
                //     display += "<li><strong>HEALTH:</strong> " + characters[j].health + "<input type='text' name='damage'><button onclick='healthEdit("+j+")' class='damage'>DAMAGE</button></li>";
                // }
                // display += "</ul>";
                // document.getElementById("order").innerHTML = display;
            }
        }
    }
}

function test(){
    var finished = 0;
    for (i = 0; finished < 1; i++){
        if(i>0){
            if(characters[i].init > characters[i-1].init){
                characters[i]
                finished = 1;
            } else {
                finished = 0;
            }
        }
    }
}

function orderCharacters(){
var orderedCharacters = [];

    // function compare(a,b) {
    //     if (a.init > b.init)
    //         return -1;
    //     if (a.init < b.init)
    //         return 1;
    //     return 0;
    // }

    // orderedCharacters = characters.sort(compare);

    var charactersLength = characters.length;
    var orderedCharacters = [];
    

    var orderedCharactersLength = orderedCharacters.length;

    var display = "";
    for (i = 0; i < orderedCharactersLength; i++){
        display += "<ul class='characters'><li><strong>NAME:</strong> " + orderedCharacters[i].name + "</li><li><strong>INITIATIVE:</strong> " + orderedCharacters[i].init + "</li>";
        if(orderedCharacters[i].health){
            display += "<li><strong>HEALTH:</strong> " + orderedCharacters[i].health + "<input type='text' name='damage'><button onclick='healthEdit("+i+")' class='damage'>DAMAGE</button></li>";
        }
        display += "</ul>";
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