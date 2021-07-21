"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intregateVoices = void 0;
const intregateVoices = () => {
    speechSynthesis.addEventListener("voiceschanged", (e) => {
        console.log(speechSynthesis.getVoices());
    });
};
exports.intregateVoices = intregateVoices;
