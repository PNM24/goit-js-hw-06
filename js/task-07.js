const textInput = document.querySelector("#font-size-control");
const textDemo = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    let fontSizeUpdated= parseFloat(textInput.value)+'px'; 
    textDemo.style.fontSize = fontSizeUpdated;
   
    console.log(textInput.value);
    console.log(textDemo.style.fontSize); 
    console.log(textDemo);
});