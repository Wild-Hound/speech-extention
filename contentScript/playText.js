if (!speechSynthesis.paused) {
    console.log("executed");
    const content = document.getElementById("content");
    const text = content.innerText;
    const speechUtterence = new SpeechSynthesisUtterance();
    speechUtterence.lang = "en-US";
    speechUtterence.text = text;
    speechSynthesis.speak(speechUtterence);
}
else {
    speechSynthesis.resume();
}
