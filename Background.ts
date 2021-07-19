let isInjected = false;

chrome.runtime.onMessage.addListener((message, sender, sendRes) => {
  switch (message.action) {
    case "inject widget":
      if (!isInjected) {
        chrome.tabs.executeScript(null, {
          file: "./contentScript/injectWidget.js",
        });
        chrome.tabs.insertCSS(null, {
          file: "./contentScript/speechWidget.css",
        });
        isInjected = true;
      }
      break;
    case "widget removed":
      isInjected = false;
      break;
    case "play":
      chrome.tabs.executeScript(null, {
        file: "./contentScript/playText.js",
      });
      break;
    case "pause":
      chrome.tabs.executeScript(null, {
        file: "./contentScript/pauseText.js",
      });
      break;
    case "stop":
      chrome.tabs.executeScript(null, {
        file: "./contentScript/stopText.js",
      });
      break;
  }
});
