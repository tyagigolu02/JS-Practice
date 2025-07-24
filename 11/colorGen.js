const mainBtn = document.querySelector("#generate");
const body = document.querySelector("body");
const currColor = document.querySelector(".currColor");

function randomColorGen(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}
mainBtn.addEventListener("click",()=>{
    const randomColor = randomColorGen();
    body.style.backgroundColor = randomColor;
    currColor.textContent = randomColor;
})
