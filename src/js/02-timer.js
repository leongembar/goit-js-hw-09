import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";



let selectedDate;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedDate= selectedDates[0];
    },
};



flatpickr("#datetime-picker", options);


const refs = {
    datetime: document.querySelector('#datetime-picker'),
    startBtn:document.querySelector('[data-start]'),
    days:document.querySelector('[data-days]'),
    hours:document.querySelector('[data-hourse]'),
    minutes:document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]'),
}

// refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', (()=>{
    // refs.startBtn.disabled = false;
console.log(selectedDate);
}

));