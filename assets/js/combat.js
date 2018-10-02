console.log("hello world");

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
        var damageAmount = document.getElementsByName("damage")[0].value;

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
            display += "<li><strong>HEALTH:</strong> " + characters[i].health + "<input type='text' name='damage'><button onclick='healthEdit("+i+")' class='damage'>DAMAGE</button></li>"
        } else {
            display += "</ul>";
        }
    }

    document.getElementById("order").innerHTML = display;
}

function orderCharacters(){
var orderedCharacters = [];

    function compare(a,b) {
        if (a.init > b.init)
            return -1;
        if (a.init < b.init)
            return 1;
        return 0;
    }

    orderedCharacters = characters.sort(compare);
    var orderedCharactersLength = orderedCharacters.length;

    var display = "";
    for (i = 0; i < orderedCharactersLength; i++){
        display += "<ul class='characters'><li><strong>NAME:</strong> " + orderedCharacters[i].name + "</li><li><strong>INITIATIVE:</strong> " + orderedCharacters[i].init + "</li><li><strong>HEALTH:</strong> " + orderedCharacters[i].health + "<input type='text' name='damage'><button onclick='healthEdit("+i+")' class='damage'>DAMAGE</button></li></ul>";
    }

    document.getElementById("order").innerHTML = display;  
}