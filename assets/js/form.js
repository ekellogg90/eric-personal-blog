const container = document.querySelector('.container');
const sunBtn = document.querySelector('#sun-button');
const userName = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

let mode = 'light';


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

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const blogEntry = {
        name: userName.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
});