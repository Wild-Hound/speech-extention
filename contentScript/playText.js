var ttsText = "";
chrome.storage.sync.get("text", function (text) {
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
    }
    else {
        var speechUtterence = new SpeechSynthesisUtterance();
        speechUtterence.lang = "en-US";
        speechUtterence.text = text.text;
        speechSynthesis.speak(speechUtterence);
    }
});
