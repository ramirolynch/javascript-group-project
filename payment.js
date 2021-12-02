(function () {
   
const cash = document.querySelector("#cash")
const card = document.querySelector("#card")

const cardInfoForm = document.querySelector("#card-information")

/*
for (const choice of paymentChoice) {
  if (choice.checked === "cash") {
      cardInfoForm.style.display = "none"
  } else if (choice.checked === "card") {
      cardInfoForm.style.display = ""
  }
}
*/

cash.addEventListener('click', function(){
    cardInfoForm.style.display = "none"
});
card.addEventListener('click', function(){
  cardInfoForm.style.display = ""
});

// set payNow button to go to verifcation if accepted
// and to have error message if not









  })();
  