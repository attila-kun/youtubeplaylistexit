document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('removePlaylist');
  
  // Load saved setting
  chrome.storage.sync.get(['removePlaylist'], (result) => {
    checkbox.checked = result.removePlaylist ?? true;
  });

  // Save setting when changed
  checkbox.addEventListener('change', (e) => {
    chrome.storage.sync.set({ removePlaylist: e.target.checked });
  });
}); 