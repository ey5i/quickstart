function startTime() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  hr = checkTime(hr);
  min = checkTime(min);
  document.getElementById("clock").innerHTML = hr + ":" + min;
  let days = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
  let months = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let date = curWeekDay + " d. " + curDay + ". " + curMonth;
  document.getElementById("date").innerHTML = date;

  let time = setTimeout(function () {
    startTime();
  }, 500);
}
// Add Zero for Hours and Minutes < 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
