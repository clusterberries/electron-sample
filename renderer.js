const btn = document.getElementById('btn');

const child = window.open('file://' + __dirname + '/child.html');

btn.addEventListener('click', () => {
    child && child.focus();
});