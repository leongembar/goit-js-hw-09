import Notiflix from 'notiflix';

const refs = {
  firstDelay:document.querySelector("input[name='delay']"),
  stepDelay:document.querySelector("input[name='step']"),
  amount:document.querySelector("input[name='amount']"),
  btnStart:document.querySelector('button'),
  form:document.querySelector('.form'),
}

refs.form.addEventListener("submit", (e)=>{e.preventDefault()})

refs.btnStart.addEventListener('click', start);

 function start (){
    const firstDelay = Number(refs.firstDelay.value);  
    const stepDelay = Number(refs.stepDelay.value);
    const amount = Number(refs.amount.value);

    for (let index = 0; index < amount; index ++ ) {
      interval(index +1, firstDelay + stepDelay*index);
    }

 }  

 function interval(position, delay){
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });

 }


function createPromise(position, delay) {
  return new Promise((resolve, reject) =>  setInterval( () => {
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay });

  } else {
    // Reject    
    reject({ position, delay });

  }
  }, delay))

}



