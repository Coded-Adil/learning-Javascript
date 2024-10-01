function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => display(data))
}

function display(posts){
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add("post")
        div.innerHTML = `
        <h5>User-${post.userId}</h5>
        <h6>Post: title-${post.title}</h6>
        <p>Post Description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

loadPost();
