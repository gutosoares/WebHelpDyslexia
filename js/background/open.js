chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status === 'loading') {
         chrome.tabs.executeScript(tabId, {file: "content.js"});
    }
});


