let ttsText = "";

chrome.storage.sync.get("text", (text) => {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  } else {
    const speechUtterence = new SpeechSynthesisUtterance();
    speechUtterence.lang = "en-US";
    speechUtterence.text = text.text;
    speechSynthesis.speak(speechUtterence);
  }
});
