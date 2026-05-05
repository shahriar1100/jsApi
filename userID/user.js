const userId = ()=>{
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = (iduser)=>{
    const userInfo = document.getElementById("userInfo")
    userInfo.innerHTML =""
   iduser.forEach(id =>{
    const userCard = document.createElement("div")
    // "id": 1,
    // "name": "Leanne Graham",
    // "username": "Bret",
    // "email": "Sincere@april.biz",
    // "address": {
    //   "street": "Kulas Light",
    //   "suite": "Apt. 556",
    //   "city": "Gwenborough",
    //   "zipcode": "92998-3874",
    //   "geo": {
    //     "lat": "-37.3159",
    //     "lng": "81.1496"
    userCard.innerHTML = `
    <div class="user-card">
        <h2>${id.name}</h2>
        <p><strong>Username:</strong> ${id.username}</p>
        <p><strong>Email:</strong> ${id.email}</p>

        <div class="address">
          <h4>street: ${id.address.street}</h4>
          <p>suite: ${id.address.suite}</p>
          <p>city: ${id.address.city}</p>
          <p>zipcode: ${id.address.zipcode}</p>
          <p>id: ${id.id}</p>
        </div>
      </div>
    `
    userInfo.appendChild(userCard)
   })
   
}


userId()