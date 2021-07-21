export const intregateVoices = () => {
  speechSynthesis.addEventListener("voiceschanged", (e) => {
    console.log(speechSynthesis.getVoices());
  });
};
