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

    // Ensures field input
    if (!userName.value) {
        alert("Enter a User Name");
        return false;
    };

    if (!title.value) {
        alert("Enter a Title");
        return false;
    };

    if (!content.value) {
        alert("Enter Content");
        return false;
    };

    let blogArray = JSON.parse(localStorage.getItem('blogArray'));
    if (!blogArray) {
        blogArray = [];
    }
    
    blogArray.push(blogEntry);

    localStorage.setItem('blogArray', JSON.stringify(blogArray));

    // Opens to page 2
    location.href = "blog.html"
});