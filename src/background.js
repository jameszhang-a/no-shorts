chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes('youtube.com/c/') && tab.url.includes('videos')) {
    const channel = tab.url.split('youtube.com/c/')[1].split('/')[0];

    // send channel name to content script
    chrome.tabs.sendMessage(tabId, { action: 'addChannel', channel }, response => {
      console.log(response);
    });
  }
});
