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
const day = weekdayList[now.getDay()];
const time = now.toLocaleTimeString();