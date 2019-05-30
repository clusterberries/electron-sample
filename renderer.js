console.log('script!');

var electron = require('electron');
var ipc = electron.ipcRenderer;

var button = document.getElementById('flash');
var isBlinking = false;

button.addEventListener('click', () => {
    isBlinking = !isBlinking;
    ipc.send('flash', isBlinking);
});
