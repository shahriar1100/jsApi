// const person = {
//     name: "AL_SHAHRIAR",
//     fruit: "Mango",
//     dish:"halim",
//     friends: ["bahrul","hasib","shakil","munna"],
//     isReach: false,
//     money:34000,
// }
// console.log(person);
// // JSON -> JS object with notation
// // JSON.stringfy = string
// // JSON.parse = object

// const personJson = JSON.stringify(person)
// console.log(personJson);

// const parseJSON = JSON.parse(personJson)
// console.log(parseJSON);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => console.log(data))

// const loadData = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// const loadData = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (posts) => {
    // console.log(posts);
    // for (let i = 0; i < posts.length; i++) {
    //     console.log(posts[i]);
    // }
    // for(const post of posts){
    //     console.log(post);
    // }
    const container = document.getElementById("container")
    container.innerHTML = ""

    posts.forEach(post => {
        console.log(post);
        const li = document.createElement("li")
        li.innerText = post.title
        container.appendChild(li)
    })

}