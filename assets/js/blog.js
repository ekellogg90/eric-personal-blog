const backBtn = document.querySelector('#back-button');
const usernameSpan = document.querySelector('#user-name');
const titleSpan = document.querySelector('#title');
const contentSpan = document.querySelector('#content');

// back button
backBtn.addEventListener('click', function() {
    location.href = "index.html"
});


function renderBlogEntry() {
    //event.preventDefault();
    const lastBlog = JSON.parse(localStorage.getItem('blogArray'));
    if (!lastBlog) {
        return;
    }
    console.log(lastBlog);
    for (blog of lastBlog) {
        console.log(blog.name);
    }
        // document.querySelector('#user-name').textContent = blogEntry.name;
        // document.querySelector('#title').textContent = blogEntry.title;
        // document.querySelector('#content').textContent = blogEntry.content;
}
renderBlogEntry();