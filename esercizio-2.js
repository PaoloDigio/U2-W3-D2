// const timeCounter = document.getElementById("time-counter");
// const seconds = document.getElementById("seconds");
// const minutes = document.getElementById("minutes");
// const hours = document.getElementById("hours");
// let second = sessionStorage.getItem("count");
// let minute = 0;
// let hour = 0;

// const counter = () => {
//     if (second) {
//         second = parseInt(second);
//     } else {
//         second = 0;
//     }
//     second++;

//     if (second === 60) {
//         minute++;
//         second = 0;
//     }
//     if (minute === 60) {
//         hour++;
//         minute = 0;
//         second = 0;
//     }

//     seconds.innerText = second;
//     minutes.innerText = minute + ":";
//     hours.innerText = hour + ":";
//     timeCounter.innerText = second + " secondi trascorsi dall'inizio della sessione";
//     sessionStorage.setItem("count", second);
// };

// setInterval(counter, 1000);

const timeCounter = document.getElementById("time-counter");
let time = sessionStorage.getItem("count");

const counter = () => {
    if (time) {
        time = parseInt(time);
    } else {
        time = 0;
    }
    time++;

    timeCounter.innerText = time + " secondi trascorsi dall'inizio della sessione";
    sessionStorage.setItem("count", time);
};

setInterval(counter, 1000);
