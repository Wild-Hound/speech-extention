if (speechSynthesis.paused || speechSynthesis.speaking) {
  speechSynthesis.cancel();
}
