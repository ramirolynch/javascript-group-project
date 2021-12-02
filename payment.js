(function () {
   
const cash = document.querySelector("#cash")
const card = document.querySelector("#card")

const cardInfoForm = document.querySelector("#card-information")



cash.addEventListener('click', function(){
    cardInfoForm.style.display = "none"
});
card.addEventListener('click', function(){
  cardInfoForm.style.display = ""
});

// see if i can change click listener to inputs instead

// set payNow button to go to verifcation if accepted
// and to have error message if not









  })();
  