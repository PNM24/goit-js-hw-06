function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorDetail = document.querySelector(".color");
const handleClick = event => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorDetail.textContent = document.body.style.backgroundColor;
  console.log(colorDetail.textContent)
};

button.addEventListener("click", handleClick);