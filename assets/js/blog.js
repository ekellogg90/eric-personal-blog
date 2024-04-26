const backBtn = document.querySelector('#back-button');

const h3Style = "font-size:24px; margin-bottom:-15px; width:33%; text-align:center; border-radius:5%"  // Title style
const pStyle = "font-size:18px; margin-bottom:-3px; width:33%; border-radius:5%;"  // Content style
const labelStyle = "font-size:16px; width:33%; text-align:right; font-style:italic"  // Author style

// back button
backBtn.addEventListener('click', function() {
    location.href = "index.html"
});

function renderBlogEntry() {
    //event.preventDefault();
    const blogArray = JSON.parse(localStorage.getItem('blogArray'));
    if (!blogArray) {
        return;
    }

    const reverseArray = blogArray.reverse();

    let blogList = document.querySelector(".blogArray-title");
    reverseArray.forEach(blog => {
        let h3El = document.createElement("h3");
        h3El.innerText = `Title: ${blog.title}`;
        h3El.style = h3Style;
        blogList.appendChild(h3El);

        let pEl = document.createElement("p");
        pEl.innerText = blog.content;
        pEl.style = pStyle;
        blogList.appendChild(pEl);


        let labelEl = document.createElement("div");
        labelEl.innerText = `Author: ${blog.name}`;
        labelEl.style = labelStyle;
        blogList.appendChild(labelEl);
    });

}
renderBlogEntry();