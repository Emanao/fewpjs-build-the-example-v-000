// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",onContentLoad)
function onContentLoad(){
  mimicServerCall()
  .then((resp)=>activateFullHearts())
  .catch(function (resp){
    getModalElem().classList.remove("hidden");
    setTimeout(hideError, 5000);
  });
}

function hideError(){
  getModalElem().classList.add("hidden");
}
function getModalElem(){
  return document.getElementById("modal");
}
function getLikeGlyphSpanElems(){
  return document.querySelectorAll(".like-glyph");
}
function activateFullHearts(){
  for (const likeGlyph of getLikeGlyphSpanElems()){
    likeGlyph.textContent= FULL_HEART;
    likeGlyph.classList.add("activated-heart");
    likeGlyph.addEventListener("click", deactivateFullHeart);
  }
}
function deactivateFullHeart(event){
  const likeGlyphSpanElem = event.target;
  likeGlyphSpanElem.textContent= EMPTY_HEART;
  likeGlyphSpanElem.classList.remove("activated-heart");
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
