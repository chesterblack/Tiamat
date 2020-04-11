// ----- ----- ----- //
//    GLOBAL VARS    //
// ----- ----- ----- //
var textBox = document.getElementById("text");
var responseBox = document.getElementById("responses");
var dialogueBox = document.getElementById("dialogue");
var newGameChoices = [{"text": "New Game", "function": "newGame()"}, {"text": "Load Game", "function": "loadGame()"}];


// ----- ----- ----- //
//     FUNCTIONS     //
// ----- ----- ----- //
function typeWriter(txt, clear = true, target, callback){
    responseBox.innerHTML = "";
    if (clear) {
        target.innerHTML = "";
    }

    var i = 0;
    var speed = 20;

    typeText();
    function typeText() {
        if (i < txt.length) {
            target.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeText, speed);
        } else {
            callback();
        }
    }
}
function narratorMessage(txt, clear = true, callback){
    typeWriter(txt, clear, textBox, callback);
}
function dialogueMessage(txt, clear = true, callback){
    // -- STARTED WORKING ON MULTPILE DIALOGUE BOXES
    // dialogueBoxes = document.getElementsByClassName('dialogue-box');
    // if (clear == true) {
    //     for(var i = 0; i < dialogueBoxes.length; i++) {
    //         dialogueBoxes[i].parentNode.removeChild(dialogueBoxes[i]);
    //     }
    // }
    typeWriter(txt, clear, dialogueBox, callback);
}

function presentChoices(choices){
    responseBox.innerHTML = "";
    for (var i = 0; i < choices.length; i++) {
        responseBox.innerHTML += createChoiceBox(choices[i]);
    }
}

function createChoiceBox(data){
    return "<button onclick=\""+data.function+"\">"+data.text+"</button>";
}

function newGame(){
    narratorMessage("You approach a tavern, the sign on the door reads: The Savoury Salmon. It seems humble, but reasonably well-kept.", true, function(){
        presentChoices([
            {"text": "Walk in", "function": "fetchRoom('savoury-salmon')"}
        ]);
    });
}

function loadGame(){
    narratorMessage("Sorry, loading games isn't available... yet", true);
    presentChoices(newGameChoices);
}

function ajax(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        var DONE = 4;
        var OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText);
                callback(xhr.responseText);
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    };
}

function fetchOptions(string){
    var optionIDs = string.split(',');
    var options = [];

    for (var i = 0; i < optionIDs.length; i++) {
        var url = '/assets/php/game.php?function=fetchOption&option=' + optionIDs[i];
        ajax(url, function(response){
            response = JSON.parse(response);
            options.push(response);
        });
    }

    return options;
}

function fetchRoom(roomName){
    var url = '/assets/php/game.php?function=fetchRoom&room=' + roomName;

    ajax(url, function(response){
        response = JSON.parse(response);

        var greeting = response.greeting;
        var options = fetchOptions(response.options);
    
        narratorMessage(greeting, true, function(){
            presentChoices(options);
        });
    });

}