
const electron = require('electron');
const btn = document.getElementById('printBtn');
const testBtn = document.getElementById('testBtn');

btn.addEventListener('click', () => {
    console.log('send print event');
    electron.ipcRenderer.send('print');
});

testBtn.addEventListener('click', () => {
    console.log('test button is clicked');
});
