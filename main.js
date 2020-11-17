// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",onContentLoad)
function onContentLoad(){
  mimicServerCall()
<<<<<<< HEAD
  .then((resp)=>activateFullHearts())
  .catch(function (resp){
    getModalElem().classList.remove("hidden");
=======
  .then((resp)=>console.log("Resolved promise: "+resp))
  .catch((resp)=>{
    console.log("Reject promise: "+ resp);
    getModalElem().removeAttribute("class");
>>>>>>> 8798a8f4fc65853491bfb5d650d6f67b42cbf963
    setTimeout(hideError, 5000);
  });
}

function hideError(){
<<<<<<< HEAD
  getModalElem().classList.add("hidden");
=======
  getModalElem().setAttribute("class", "hidden");
>>>>>>> 8798a8f4fc65853491bfb5d650d6f67b42cbf963
}
function getModalElem(){
  return document.getElementById("modal");
}
<<<<<<< HEAD
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
=======
>>>>>>> 8798a8f4fc65853491bfb5d650d6f67b42cbf963




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
