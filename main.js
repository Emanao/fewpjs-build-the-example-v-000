// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",onContentLoad)
function onContentLoad(){
  mimicServerCall()
  .then((resp)=>console.log("Resolved promise: "+resp))
  .catch((resp)=>{
    console.log("Reject promise: "+ resp);
    getModalElem().removeAttribute("class");
    setTimeout(hideError, 5000);
  });
}

function hideError(){
  getModalElem().setAttribute("class", "hidden");
}
function getModalElem(){
  return document.getElementById("modal");
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
