const container = document.querySelector('.container');
const sunBtn = document.querySelector('#sun-button');

let mode = 'light';

// Light & Dark mode toggle
sunBtn.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        document.getElementById("sun-button").innerHTML = "🌑";
    } 

    else {
        mode = 'light';
        container.setAttribute('class', 'light');
        document.getElementById('sun-button').innerHTML = "☀";
    }
});