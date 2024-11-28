chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url.includes("youtube.com/watch")) {
      const url = new URL(tab.url);
  
      // Remove the 'list' parameter
      if (url.searchParams.has('list')) {
        url.searchParams.delete('list');
  
        // Redirect to the new URL
        chrome.tabs.update(tabId, { url: url.toString() });
      }
    }
  });
  