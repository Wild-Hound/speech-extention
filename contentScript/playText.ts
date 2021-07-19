if (!speechSynthesis.paused) {
  console.log("executed");
  const content: HTMLElement = document.getElementById("content");
  const text = (content as HTMLElement).innerText;

  const speechUtterence = new SpeechSynthesisUtterance();
  speechUtterence.lang = "en-US";
  speechUtterence.text = text;
  speechSynthesis.speak(speechUtterence);
} else {
  speechSynthesis.resume();
}
