chrome.runtime.onMessage.addListener(function (message, sender, sendRes) {
    switch (message.action) {
        case "extract text":
            chrome.tabs.executeScript(null, {
                file: "./contentScript/extractText.js"
            });
            break;
        case "play":
            chrome.tabs.executeScript(null, {
                file: "./contentScript/playText.js"
            });
            break;
        case "pause":
            chrome.tabs.executeScript(null, {
                file: "./contentScript/pauseText.js"
            });
            break;
        case "stop":
            chrome.tabs.executeScript(null, {
                file: "./contentScript/stopText.js"
            });
            break;
    }
});
