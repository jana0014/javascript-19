function savePost(post) {
// request body - tuka najcesto gi stavame podatocite sto sakame da gi zacuvame na serverska strana
fetch('https://jsonplaceholder.typicode.com/posts' , {
    method: 'POST', // http method
    body: JSON.stringify()
})
}

savePost({
    usedId: 10,
    title: 'My first post.',
    body: 'I am learning more about http requests.'
})

function deletePost(post) {
    // request body - tuka najcesto gi stavame podatocite sto sakame da gi zacuvame 
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}` , {
        method: 'DELETE', // http method
    })
}

function login() {
    fetch('http://222.nekoeURLzalogin.com' , {
        method:'POST',
        body: JSON.stringify({
            username: document.getElementById('username'),
            password: document.getElementById('password')
        })
    }).then(response => response.json())
    .then(data => console.log(data)) //success or fail
}

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    localStorage.setItem('post', JSON.stringify(posts))
}

if(!localStorage.getItem('posts')) {
    getPosts ()
}
