const countDown = () => {
  const countDate = new Date("April 30, 2022 12:53:00");
  const now = new Date().getTime();
  const gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById("day").innerHTML = textDay;
  document.getElementById("hour").innerHTML =
    textHour < 10 ? "0" + textHour : textHour;
  document.getElementById("minutes").innerHTML =
    textMinute < 10 ? "0" + textMinute : textMinute;
  document.getElementById("seconds").innerHTML =
    textSecond < 10 ? "0" + textSecond : textSecond;
};

setInterval(countDown, 1000);
