console.log("hello world");

var characters = [];

function formChanged(){
    characters[characters.length] = {
        name:document.getElementsByName("nameInput")[0].value,init:document.getElementsByName("initInput")[0].value
    };

    console.log(characters);

    var charactersLength = characters.length;

    var display = "<ul>";

    for (i = 0; i < charactersLength; i++){
        display += "<li>NAME: " + characters[i].name + "<br /> INITIATIVE: " + characters[i].init + "</li><hr>";
    }
    display += "</ul>";

    document.getElementById("order").innerHTML = display;
};