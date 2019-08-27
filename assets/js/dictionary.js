var englishSearchBox = document.getElementById('english-search');
var alfstraniiSearchBox = document.getElementById('alfstranii-search');
var error;

function checkText(language){
    if (language == "english" && englishSearchBox.value != "") {
        alfstraniiSearchBox.disabled = true;
        englishSearchBox.disabled = false;
    } else if (language == "alfstranii" && alfstraniiSearchBox.value != "") {
        englishSearchBox.disabled = true;
        alfstraniiSearchBox.disabled = false;
    } else {
        englishSearchBox.disabled = false;
        alfstraniiSearchBox.disabled = false;
    }
}

function search() {
    var error = false;
    if (englishSearchBox.value != "") {
        var language = "english";
        var searchTerm = englishSearchBox.value;
    } else if (alfstraniiSearchBox.value != "") {
        var language = "alfstranii";
        var searchTerm = alfstraniiSearchBox.value;
    } else {
        error = "Please search for a term";
    }

    if (error) {
        console.log("Error: "+error);
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/assets/php/ajax-dictionary.php?language='+language+'&searchterm='+searchTerm);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else {
                    console.log('Error: ' + xhr.status);
                }
            }
        };
    }
}