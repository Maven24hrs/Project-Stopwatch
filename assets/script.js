// Select Elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let elapsedTime = 0; 
let isRunning = false;

// Formating time as HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (mins < 10 ? "0" : "") + mins + ":" +
    (secs < 10 ? "0" : "") + secs
  );
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedTime++;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});


resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = "00:00:00";
});
