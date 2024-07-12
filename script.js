let stopwatchInterval;
let startTime;
let elapsedTime = 0;
let laps = [];

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  stopwatchInterval = setInterval(updateStopwatch, 10); // Update every 10ms
}

function updateStopwatch() {
  elapsedTime = Date.now() - startTime;
  displayTime(elapsedTime);
}

function displayTime(milliseconds) {
  const display = document.getElementById('display');
  const formattedTime = formatTime(milliseconds);
  display.textContent = formattedTime;
}

function formatTime(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  milliseconds %= 3600000;
  let minutes = Math.floor(milliseconds / 60000);
  milliseconds %= 60000;
  let seconds = Math.floor(milliseconds / 1000);
  milliseconds %= 1000;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(number, length = 2) {
  return ('0' + number).slice(-length);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
  laps = [];
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  const formattedTime = formatTime(elapsedTime);
  laps.push(formattedTime);
  const lapsList = document.getElementById('laps');
  const li = document.createElement('li');
  li.textContent = `Lap ${laps.length}: ${formattedTime}`;
  lapsList.prepend(li); // Add new lap at the beginning
}
