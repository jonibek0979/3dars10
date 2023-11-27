let elList = document.getElementById('list')
let elBtn = document.querySelector('.btn')
let elBtnn = document.querySelector('.btn')

function fnFeach() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => userMap(data))
}
fnFeach()











function userMap(data) {
    elList.innerHTML = ''
    data.map((item) => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `  <div class="card card__div" style="width: 18rem;">
       <img src="https://cdn-icons-png.flaticon.com/512/9045/9045141.png" class="card-img-top card__img" alt="...">
       <div class="card-body">
         <h5 class="card-title btn btn-info card__title">${item.id}</h5>
         <p class="card-text card__text">${item.name}</p>
         <p class="card-text card__text">${item.username}</p>
         <button onclick="postMap(${item.id})" class="btn btn-info card__btn">go somewhere</button>
       </div>
     </div>`
        elList.appendChild(newLi)
    })
}

function postMap(id) {
    elList.innerHTML = ''
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                let newLi = document.createElement('li')
                newLi.innerHTML = `  <div class="card card__div2" style="width: 18rem;">
    <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg" class="card-img-top card__img2" alt="...">
    <div class="card-body">
      <h5 class="card-title btn btn-warning card__title2">${item.userId}</h5>
      <h5 class="card-title btn btn-warning card__title2">${item.id}</h5>

      <p class="card-text card__text2">${item.title.toString().split(" ").splice(0, 3).join(" ")}</p>
      <p class="card-text card__text2">${item.body.toString().split(" ").splice(0, 3).join(" ")}</p>
      <button onclick="postfn(${item.id})" class="btn btn-warning card__btn2">${item.email}</button>
    </div>
  </div>`
                elList.appendChild(newLi)
                elBtn.style.display = 'block'
                elBtn.style.color = 'white'
            })
        })
}

function postfn(id) {
    elList.innerHTML = ''
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                let newLi = document.createElement('li')
                newLi.innerHTML = `  <div class="card card__div3" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEk5bOxiGYUCehEtt3ertRSiw-LkT2kiqKzkWwvHRA2ryATKiUER0K7APDupkRI-ou6h4&usqp=CAU" class="card-img-top card__img3" alt="...">
    <div class="card-body">
      <h5 class="card-title btn btn-dark card__title3">${item.postId}</h5>
      <h5 class="card-title btn btn-dark card__title3">${item.id}</h5>
      <p class="card-text card__text3">${item.name.toString().split(" ").splice(0, 3).join(" ")}</p>
      <p class="card-text card__text3">${item.email.toString().split(" ").splice(0, 3).join(" ")}</p>
      <button onclick="postMap(${item.body})" class="btn btn-dark">${item.email}</button>
    </div>
  </div>`
                elList.appendChild(newLi)
                elBtn.style.background = '#000'
                elBtn.style.color = 'white'
                elBtn.style.border = '2px solid #000'

            })
        })
}



















