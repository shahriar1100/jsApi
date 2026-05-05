const userComment = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch(url)
        .then(res => res.json())
        .then(data => displayComment(data))
}

const displayComment = (comments) => {
    const userComment = document.getElementById("userComment")
    userComment.innerHTML = ""
    comments.forEach(comment => {
        const cardComment = document.createElement("div")
        cardComment.innerHTML = `
        <div class="comment-card">
  <h3 class="comment-title">
    ${comment.name}
  </h3>

  <p class="comment-email">
    ${comment.email}
  </p>

  <p class="comment-body">
    ${comment.body}
  </p>
</div>
        `
    userComment.appendChild(cardComment)
    })
}


userComment()