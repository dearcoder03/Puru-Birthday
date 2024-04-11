const dayEl = document.getElementById("day")

const hourEl = document.getElementById("hour")

const minuteEl = document.getElementById("minutes")

const secondEl = document.getElementById("seconds")


const newBirthTime = new Date("April 13, 2024 00:00:00").getTime()

// count down function
updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();

    const gap = newBirthTime - now

    // console.log(now , newBirthTime, gap);

    // our data is in millisec
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m = Math.floor((gap%hour)/minute);
    const s = Math.floor((gap%minute)/second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountdown, 1000);

}