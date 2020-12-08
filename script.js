"use strict";

const clockEL = document.querySelector(".clock");
const messageEL = document.querySelector(".message");

setInterval(function () {
  const now = new Date();
  const year = now.getFullYear();
  const months = [
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
  const month = months[now.getMonth()];
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
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  messageEL.textContent = `${time} ${weekday}, ${month} ${day} ${year}`;
}, 0);
