var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function injectWidget() {
    const fontawesome = document.createElement("link");
    fontawesome.rel = "stylesheet";
    fontawesome.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
    const windowControlGroup = `<div class='windowControlGroup'>
      <button id='windowMinimizeBtn' class='winConBtn'><i class="fas fa-chevron-down"></i></button>
      <button id='windowCloseBtn' class='winConBtn'><i class="fas fa-times"></i></button>
    </div>`;
    const speechOptions = `
  <div class='speechOptGroup'>
    <div class='groupWrapper selectWrapper'>
      <label for="voices">Choose Voice</label>
      <select name="voices" id="voices" class="input">
      <option value="test">Test</option>
      </select>
    </div>

    <div class='groupWrapper'>
    <label for="rate">Rate: </label>
    <input type='range' id='rate' class="input"min='0.5' max='2' value='1' step='0.1'/>
    </div>

    <div class='groupWrapper'>
    <label for="pitch">Pitch: </label>
    <input type='range' id='pitch' class="input" min='0.1' max='2' value='1'step='0.1'/>
    </div>
  </div>
  `;
    const conBtnGroup = `<div class='conBtnGroup'>
      <button class='controlBtn' id='pause'><i class="fas fa-pause"></i></button>
      <button class='controlBtn' id='play'><i class="fas fa-play"></i></button>
      <button class='controlBtn' id='stop'><i class="fas fa-stop"></i></button>
    </div>`;
    const widget = `
      ${windowControlGroup}
      ${speechOptions}
      ${conBtnGroup}
    `;
    const wrapper = document.createElement("div");
    wrapper.id = "speechWidget";
    wrapper.innerHTML = widget;
    document.head.append(fontawesome);
    document.body.appendChild(wrapper);
    intregateVoices();
}
function widgetAction() {
    const widget = document.getElementById("speechWidget");
    const btn = document.getElementById("windowCloseBtn");
    let rateVal = 1;
    let pitchVal = 1;
    btn.addEventListener("click", (e) => {
        widget.remove();
        chrome.runtime.sendMessage({ action: "widget removed" });
    });
    const pauseBtn = document.getElementById("pause");
    pauseBtn.addEventListener("click", (e) => {
        pauseSpeech();
    });
    const playBtn = document.getElementById("play");
    playBtn.addEventListener("click", (e) => {
        playSpeech(rateVal, pitchVal);
    });
    const stopBtn = document.getElementById("stop");
    stopBtn.addEventListener("click", (e) => {
        stopSpeech();
    });
    const rateSlider = document.getElementById("rate");
    rateSlider.addEventListener("change", (e) => {
        rateVal = e.target.value;
        console.log(rateVal);
    });
    const pitchSlider = document.getElementById("pitch");
    pitchSlider.addEventListener("change", (e) => {
        pitchVal = e.target.value;
        console.log(pitchVal);
    });
}
function pauseSpeech() {
    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
        console.log("speech paused");
    }
}
function playSpeech(rateVal, pitchVal) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!speechSynthesis.paused) {
            const text = extractText();
            const speechUtter = new SpeechSynthesisUtterance();
            speechUtter.rate = rateVal;
            speechUtter.pitch = pitchVal;
            speechUtter.lang = "en-US";
            speechUtter.text = text;
            speechSynthesis.speak(speechUtter);
            console.log("playing speech");
        }
        else {
            speechSynthesis.resume();
        }
    });
}
function stopSpeech() {
    if (speechSynthesis.speaking || speechSynthesis.paused) {
        speechSynthesis.cancel();
        console.log("speech stopped");
    }
}
function extractText() {
    const textContent = document.getElementById("content");
    return textContent.innerText;
}
function intregateVoices() {
    speechSynthesis.addEventListener("voiceschanged", (e) => {
        const voices = speechSynthesis.getVoices().map((voice) => {
            return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
        });
        const voiceSelectElement = document.getElementById("voices");
        voiceSelectElement.innerHTML = voices.join("");
    });
}
injectWidget();
widgetAction();
