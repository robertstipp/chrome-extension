chrome.action.onClicked.addListener((tab)=>{
  chrome.windows.create({'url': 'popup.html', 'type': 'popup', 'width' : 500, 'height': 600})
})


let lastHoveredText = ""

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  }).catch((error) => {
    console.error("Script injection failed", error);
  });
});

// not being used right now. GO TO POPUP.JS
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'getHover') {
      console.log('sent')
      sendResponse({text: lastHoveredText});
  }
  if (request.type === 'hover') {
      lastHoveredText = request.text;
      sendResponse({status: 'updated'});
  }
  // Always return true to indicate that the response will be sent asynchronously
  // https://developer.chrome.com/extensions/messaging#simple
  return true;
});
