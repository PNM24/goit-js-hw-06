let counterValue = 0;
let value = document.querySelector("#value");

(() => {
    const contor = {
        decrementBtn: document.querySelector('button[data-action="decrement"]'),
        incrementBtn: document.querySelector('button[data-action="increment"]'),
    };

    contor.decrementBtn.addEventListener("click", decrement);
    contor.incrementBtn.addEventListener("click", increment);

    function decrement() {
        counterValue -= 1;
        value.textContent = counterValue; 
        console.log(counterValue)
    }
    
    function increment() {
        counterValue += 1;
        value.textContent = counterValue; 
        console.log(counterValue)
    }

   
    
})();