const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
chrome.runtime.sendMessage({ action: "inject widget" });
playBtn.addEventListener("click", (e) => {
    chrome.runtime.sendMessage({ action: "play" });
});
pauseBtn.addEventListener("click", (e) => {
    chrome.runtime.sendMessage({ action: "pause" });
});
stopBtn.addEventListener("click", (e) => {
    chrome.runtime.sendMessage({ action: "stop" });
});
