// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 let modal = document.getElementById('modal')
modal.classList.add("hidden")
let likeHearts = document.querySelectorAll('.like-glyph')
likeHearts.forEach(likeHeart=>{

likeHeart.addEventListener('click', changes)
function changes() {
 if (likeHeart.innerHTML === EMPTY_HEART) {
		likeHeart.innerHTML = FULL_HEART;
		likeHeart.classList.add("activated-heart");
 } else {
		likeHeart.innerHTML = EMPTY_HEART;
		likeHeart.classList.remove("activated-heart");
 }

 
  }
}
)

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
