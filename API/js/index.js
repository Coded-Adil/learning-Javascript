function LoadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(node => displayUsers2(node))
}

function displayUsers2(node) {
    const ul = document.getElementById('user-list');
    for (const user of node) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name; // Use user.name to display the actual name
        ul.appendChild(li);
    }
}


function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}



function PostAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function Update(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}