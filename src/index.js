document.addEventListener('DOMContentLoaded', function() {

  const imgCard = document.getElementById("image_card");

  const imageId = 86 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
  .then(res => res.json())
  .then(data => {
    data.forEach(d => {
      imgCard.append(dataMaker(d))
      console.log(d)
    })
  })

  const commentForm = document.getElementById("comment_form");
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // if(event.target.className === "submit-button"){
    //   event.target.
    // }
  })

  function dataMaker(d) {
    const dataDiv = document.createElement('div');
    dataDiv.innerHTML =  `
      <img src=${d.url} id="image" data-id/>
      <h4 id="name">${d.name}</h4>
      <span>Likes:
        <span id="likes">${d.like_count}</span>
      </span>
      <button id="like_button">Like</button>
    `

    dataDiv.dataset.id = d.id;

    return dataDiv;
  }

})
