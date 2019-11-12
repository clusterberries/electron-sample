console.log('script!');

var electron = require('electron');
var desktopCapturer = electron.desktopCapturer;

var container = document.getElementById('screens-container');

desktopCapturer.getSources({ types: ['screen'] })
.then(function (sources) {
    console.log('Received ' + sources.length + ' sources.', sources);

    var innerHTML = '';

    sources.forEach(source => {
        source.imgSrc = source.thumbnail.toDataURL();

        innerHTML += `
<li>
    <div class="source-img">
        <img src="${source.imgSrc}" alt="">
    </div>
    <div class="text">${source.name}</div>
</li>`
    });

    container.innerHTML = innerHTML;
})
.catch(function (error) {
    console.log('ERROR: Unable to get sources.', error);
});
