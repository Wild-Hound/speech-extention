const content: HTMLElement = document.getElementById("content");
const text = (content as HTMLElement).innerText;
chrome.storage.sync.set({ text: text });
