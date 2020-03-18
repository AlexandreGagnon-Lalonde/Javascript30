const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function setTime() {
    var today = new Date();

    var hourValue = today.getHours();
    const hourDegree = ((hourValue / 12) * 360) - 90;
    hour.style.transform = `rotate(${hourDegree}deg)`;

    var minuteValue = today.getMinutes();
    const minuteDegree = ((minuteValue / 60) * 360) - 90;
    minute.style.transform = `rotate(${minuteDegree}deg)`;

    var secondValue = today.getSeconds();
    const secondDegree = ((secondValue / 60) * 360) - 90;
    second.style.transform = `rotate(${secondDegree}deg)`;
    
}

setInterval(setTime, 1000);
