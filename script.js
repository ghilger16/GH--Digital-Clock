"use strict";

///// Elements
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");

////// ticking clock
setInterval(function () {
  const now = new Date();
  const year = now.getFullYear();
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthList[now.getMonth()];
  const weekdayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = weekdayList[now.getDay()];
  const day = now.getDate();
  const time = now.toLocaleTimeString([], {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  //// add to elements
  timeEL.textContent = time;
  dateEL.textContent = `${weekday}, ${month} ${day} ${year}`;
}, 0);
