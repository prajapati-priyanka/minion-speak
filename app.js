var inputText =document.querySelector('#input-text');
var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("You Clicked!");
    console.log(inputText.value);
})