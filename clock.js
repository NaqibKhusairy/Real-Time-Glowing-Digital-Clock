const $time = document.getElementById('time');
const $currentDate = document.getElementById('current-date');
const $currentDay = document.getElementById('current-day');

const updateClock = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let ampm = 'AM';
    
    if (hours >= 12) {
        ampm = 'PM';
        hours = hours - 12;
    }

    $time.textContent = String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + ' ' +
        ampm;
};

const updateDateAndDay = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);

    $currentDate.textContent = currentDate.split(',')[1].trim(); // Extracting and trimming the date
    $currentDay.textContent = currentDate.split(',')[0].trim(); // Extracting and trimming the day
};

setInterval(() => {
    updateClock();
    updateDateAndDay();
}, 1000);

// Initial update
updateClock();
updateDateAndDay();
