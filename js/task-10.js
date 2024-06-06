function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textInput = document.querySelectorAll("input");

(() => {
    const action = {
      createBtn: document.querySelector("[data-create]"),
      destroyBtn: document.querySelector("[data-destroy]"),
    };

    action.createBtn.addEventListener("click", createBoxes);
    action.destroyBtn.addEventListener("click", destroyBoxes);
  

  function createBoxes(amount) {
    const boxes = document.querySelector("#boxes");
    amount = document.getElementsByTagName("input")[0].value;
    console.log(amount); //de verificare
    const width = 20;
    const height = 20;
    for (let i = 1; i <= amount; i++){
      const boxGeneration = document.createElement("div");
      boxGeneration.style.width = width + 10*i +`px`;
      boxGeneration.style.height = height + 10 * i + `px`;
      boxGeneration.style.backgroundColor = getRandomHexColor();
      boxes.append(boxGeneration);
      console.log(boxGeneration, boxGeneration.style.width, boxGeneration.style.heigth, boxGeneration.style.backgroundColor); 
        
    }
    console.log(boxes) 
    console.log(boxes.children) 
    }
  
   function destroyBoxes() {
     boxes.innerHTML = '';
     console.log(boxes);
     console.log(boxes.children);
      }
     
  
 
})();