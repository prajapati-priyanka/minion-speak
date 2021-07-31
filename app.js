var inputText =document.querySelector('#input-text');
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector('#output-text');

var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function urlContructor(inputText){
    return serverURL+"?"+"text="+inputText;
}

function errorHandler(error){
    console.log("fetch call failed");
}


function clickEventHandler(){
    // console.log("clicked");
    var inputTextContent = inputText.value;
    // console.log(inputTextContent);
    fetch(urlContructor(inputTextContent))
        .then(response => response.json())
        .then(data =>{
            var textTranslated = data.contents.translated;
            // console.log(textTranslated);
            outputText.innerText = textTranslated;
        })
        .catch(errorHandler);



    // outputText.innerText = inputTextContent;
}

btnTranslate.addEventListener("click", clickEventHandler);