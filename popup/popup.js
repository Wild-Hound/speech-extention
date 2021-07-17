var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var stopBtn = document.getElementById("stop");
chrome.runtime.sendMessage({ action: "extract text" });
playBtn.addEventListener("click", function (e) {
    chrome.runtime.sendMessage({ action: "play" });
});
pauseBtn.addEventListener("click", function (e) {
    chrome.runtime.sendMessage({ action: "pause" });
});
stopBtn.addEventListener("click", function (e) {
    chrome.runtime.sendMessage({ action: "stop" });
});
