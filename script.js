"use strict";

window.onload = () => {
  setInterval(currentTime);
  currentDate();
};

function currentDate() {
  const now = new Date();
  const day = now.getDate();
  const weekday = now.toLocaleString("default", { weekday: "long" });
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  const dateElement = document.querySelector(".date");
  dateElement.textContent = `${weekday}, ${month} ${day} ${year}`;
}

function currentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString({
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const timeElement = document.querySelector(".time");
  timeElement.textContent = time;
}
