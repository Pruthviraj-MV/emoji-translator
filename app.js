//here queryselctor assigns the entire html event to the variable

var inputText = document.querySelector("#input-text");

//emoji button click processing 
var pirateBtn = document.querySelector("#pirate-btn");

//pirate text output process
var pirateText = document.querySelector("#pirate-text");




//test server URL
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//source code of yoda url https://repl.it/@tanaypratap/lessonfourapi


var url = "https://api.funtranslations.com/translate/pirate.json";

function errorHandler (error) {
    console.log("Error Occurred"); //useful if we print on console to debug
    alert("Oops! Error Occurred. Please try after sometime");
}


function pirateURL(text)
{
    
    return url+"?"+"text="+encodeURIComponent(text);
}

function pirateTextHandler() {

    var userText = inputText.value;

    fetch(pirateURL(userText)) //url to translate to pirate texts

        .then(response => response.json())
        //Also => .then(function responseHandler(response) { return reponse.json() ))

        .then(json => {
            var pirateTranslatedText = json.contents.translated; //storing the value of pirate text
            pirateText.innerText = pirateTranslatedText;
            console.log(json.contents.translated);
        })

        // Also => .then(function logJSON(json) { console.log(json) } )

        //error handling function
        .catch(errorHandler); //call back function if we encounter error on server
     
}


//EventListener needs an event like click,scroll... and a function to perform on it 
pirateBtn.addEventListener("click", pirateTextHandler);