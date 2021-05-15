// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const addClass = document.getElementById("modal").classList.add("hidden");
let heartBtn = document.querySelectorAll(".like-glyph")
let errMsg = document.getElementById("modal-message")

heartBtn.forEach((heart) => {
  heart.addEventListener("click", (e) => {
  mimicServerCall()
  .then(() => {
    changeHeart(heart)
  })
  .catch((res) => {
    const removeClass = document.getElementById("modal").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("modal").classList.add("hidden");
    }, 3000)
    errMsg.innerText = res
  })
  
  })
})

function changeHeart(empty) {
  if(empty.innerText === EMPTY_HEART){
    empty.innerText = FULL_HEART
    empty.classList.add("activated-heart")
} else {
    empty.innerText = EMPTY_HEART
    empty.classList.remove("activated-heart")
}

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

