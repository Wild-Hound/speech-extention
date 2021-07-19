function injectWidget() {
  const body = document.querySelector("body");
  const widget = `
<div id='speechWidget'>

</div>`;

  body.innerHTML = body.innerHTML + widget;

  console.log("widget injected");
}
function widgetAction() {
  const widget = document.getElementById("speechWidget");
  widget.addEventListener("click", (e) => {
    widget.remove();
    chrome.runtime.sendMessage({ action: "widget removed" });
  });
}

injectWidget();
widgetAction();
