const refs =  {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

let check = true;

refs.startBtn.addEventListener('click', changeColorClick);
refs.stopBtn.addEventListener('click', stopChangeColorClick);

function changeColorClick(){
    if (check){
        changeColorId = setInterval(changeColor,1000);
        check = !check;
       
    }
}



function stopChangeColorClick(){
    clearInterval(changeColorId);
    check = !check;
}

function changeColor(){
    refs.body.style.background = getRandomHexColor();

}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
