const userName = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const formEl = document.querySelector('#form');

// input storage + submit button
formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    const blogEntry = {
        name: userName.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    let blogArray = JSON.parse(localStorage.getItem('blogArray'));
    if (!blogArray) {
        blogArray = [];
    }
    blogArray.push(blogEntry);

    localStorage.setItem('blogArray', JSON.stringify(blogArray));
    location.href = "blog.html" //maybe later add in error handling for null values
});