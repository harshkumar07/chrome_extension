// popup.js
const notepad = document.getElementById('notepad');

// Load saved content from storage
chrome.storage.sync.get(['content'], (result) => {
    notepad.value = result.content || '';
});

// Save content to storage when the user types
notepad.addEventListener('input', () => {
    const content = notepad.value;
    chrome.storage.sync.set({ content });
});
