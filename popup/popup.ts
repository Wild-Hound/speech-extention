const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

chrome.runtime.sendMessage({ action: "extract text" });

playBtn.addEventListener("click", (e) => {
  chrome.runtime.sendMessage({ action: "play" });
});

pauseBtn.addEventListener("click", (e) => {
  chrome.runtime.sendMessage({ action: "pause" });
});

stopBtn.addEventListener("click", (e) => {
  chrome.runtime.sendMessage({ action: "stop" });
});
