const textInput = document.querySelector("#font-size-control");
const textDemo = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    let fontSizeUpdated= parseFloat(textInput.value)+'px'; 
    textDemo.style.fontSize = fontSizeUpdated;
    // document.getElementById("text").style.fontSize = fontSizeUpdated;//a doua varianta(fara declarea de la linia 2)
    console.log(textInput.value);
    console.log(textDemo.style.fontSize); 
    console.log(textDemo);
});