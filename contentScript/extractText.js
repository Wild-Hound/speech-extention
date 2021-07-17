var content = document.getElementById("content");
var text = content.innerText;
chrome.storage.sync.set({ text: text });
