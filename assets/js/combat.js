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

    var display = "<ul>";
    for (i = 0; i < charactersLength; i++){
        display += "<li>NAME: " + characters[i].name + "<br /> INITIATIVE: " + characters[i].init + "<br /> HEALTH: " + characters[i].health + "<input type='text' name='damage'><button onclick='healthEdit("+i+")'>DAMAGE</button></li><hr>";
    }
    display += "</ul>";

    document.getElementById("order").innerHTML = display;
}

function test(){
    var testArray = [];
    characters = testArray;
    console.log(testArray);
}

function orderCharacters(){
    console.log(characters);

    var charactersLength = characters.length;
    var orderedCharacters = [];

    for (i = 0; i < charactersLength; i++){
        var originTest = characters[i].init;

        try{
            var newTest = characters[i+1].init;
        } catch {
            console.log("break!");
            break;
        }
        
        if(originTest > newTest){
            orderedCharacters.push(characters[i]);
            console.log(originTest + " larger than " + newTest);
            console.log(orderedCharacters);
            console.log("---");

        } else {
            orderedCharacters.unshift(characters[i+1]);
            console.log(originTest + " smaller than " + newTest);
            console.log(orderedCharacters);
            console.log("---");

        }
        
    }

    console.log(orderedCharacters);

    // var orderedCharactersLength = orderedCharacters.length;

    // var display = "<ul>";
    // for (i = 0; i < orderedCharactersLength; i++){
    //     display += "<li>NAME: " + orderedCharacters[i].name + "<br /> INITIATIVE: " + orderedCharacters[i].init + "<br /> HEALTH: " + orderedCharacters[i].health + "<input type='text' name='damage'><button onclick='healthEdit("+i+")'>DAMAGE</button></li><hr>";
    // }
    // display += "</ul>";

    // document.getElementById("order").innerHTML = display;
}