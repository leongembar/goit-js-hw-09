import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';


const refs = {
    datetime: document.querySelector('#datetime-picker'),
    startBtn:document.querySelector('[data-start]'),
    days:document.querySelector('[data-days]'),
    hours:document.querySelector('[data-hours]'),
    minutes:document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]'),
}

refs.startBtn.disabled =true;

let selectedDate;



flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate= selectedDates[0];
      const nowDate = new Date();

      checkDate(selectedDate, nowDate);
    }});


refs.startBtn.addEventListener('click',startTimer);

function startTimer(){
    clickDate = new Date();
    const ms = selectedDate-clickDate;
    date = convertMs(ms);

    timerId = setInterval(getDate(date), 1000);

}

function getDate({days, hours, minutes, seconds}){
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
   
}

function checkDate(selectedDate, nowDate){
    if (nowDate - selectedDate  > 0 ){
        Notiflix.Notify.failure("Please choose a date in the future");
    }
    else {        
        refs.startBtn.disabled = false;
    }

}

function convertMs(ms){
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }