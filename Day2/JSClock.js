// generate the date when page loaded
var date = new Date();

// names of the month with full name or abreviated
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// current date printed on the page divs
document.querySelector(".date").innerHTML = monthNamesShort[date.getMonth()] + " " + date.getDate();
document.querySelector(".year").innerHTML = date.getFullYear();

// selection of all the clock hands
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

// selection of numeric clock
const secondNum = document.querySelector(".secondNum");
const minuteNum = document.querySelector(".minuteNum");
const hourNum = document.querySelector(".hourNum");

function setTime() {
    // local variable for the function
    var today = new Date();

    // convert the hour in degree to move the hour hand
    var hourValue = today.getHours();
    const hourDegree = ((hourValue / 12) * 360) - 90;
    hour.style.transform = `rotate(${hourDegree}deg)`;
    // updates value of hour on numeric clock
    hourNum.innerHTML = hourValue;
    // add a zero before a single digit for the hour, the minute and the second
    if (hourValue < 10) {
        hourNum.innerHTML = "0" + hourValue.toString();
    }

    // convert the minute in degree to move the minute hand
    var minuteValue = today.getMinutes();
    const minuteDegree = ((minuteValue / 60) * 360) - 90;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    // updates value of miute on numeric clock
    minuteNum.innerHTML = minuteValue;
    // add a zero before a single digit for the hour, the minute and the second
    if (minuteValue < 10) {
        minuteNum.innerHTML = "0" + minuteValue.toString();
    }

    // convert the second in degree to move the second hand
    var secondValue = today.getSeconds();
    const secondDegree = ((secondValue / 60) * 360) - 90;
    second.style.transform = `rotate(${secondDegree}deg)`;
    // updates value of second on numeric clock
    secondNum.innerHTML = secondValue;
    // add a zero before a single digit for the hour, the minute and the second
    if (secondValue < 10) {
        secondNum.innerHTML = "0" + secondValue.toString();
    }

    // update the date if the page is loaded before midnight and kept open
    var yearValue = today.getFullYear();
    var dayValue = today.getDate();
    var monthValue = today.getMonth();
}

// repeats the function every second to move the hands depending on time
setInterval(setTime, 1000);