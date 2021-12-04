(function () {
   
const cash = document.querySelector("#cash");
const card = document.querySelector("#card");

const cardInfoForm = document.querySelector("#card-information");
const cashForm = document.querySelector("#cash-amount");


// show/hide cash or card forms

cardInfoForm.style.display= "none";

cashForm.style.display= "none";


cash.addEventListener('click', function(){
    cardInfoForm.style.display = "none";
    cashForm.style.display = "";

});
card.addEventListener('click', function(){
  cardInfoForm.style.display = "";
  cashForm.style.display = "none";
});



// order summary from local storage cart

let customerCart = document.querySelector("section > ul");

let cartProducts = JSON.parse(localStorage.getItem("cartContent"));
let cartArray = cartProducts.addedProducts;
let summaryTotal = document.querySelector("section > span");
let summarySection = document.querySelector("section");

let checkoutTotal = 0;

for (let i=0; i<cartArray.length; i++) {

  let cartItems = document.createElement("li");
  cartItems.innerText = `${cartArray[i].name} $${cartArray[i].price * cartArray[i].quantity}`;
  customerCart.append(cartItems);

  checkoutTotal += cartArray[i].price * cartArray[i].quantity;
  summaryTotal.innerText = `Total: $${checkoutTotal}`
  summarySection.append(summaryTotal);


};

// change back calculator

document.getElementById("cash-input").addEventListener("change", function(){
  let cashGiven = parseFloat(document.getElementById("cash-input").value);
  let changeBack = document.querySelector("#change-back");

  let changeTotal = cashGiven - checkoutTotal;

  if (cashGiven < checkoutTotal){
    changeBack.innerText = `Total is higher than cash given, please add at least $${(changeTotal*-1).toFixed(2)} and try again.`;
  } else if (cashGiven >= checkoutTotal){
    changeBack.innerText = `$${changeTotal.toFixed(2)}`;
  } else {
    moreMoney.innerText = "Error, please try again with valid cash amount."
  }

});

//create if statement that triggers a message if not enough cash is given prompting more
//disable pay button?
//optional new input pop up that adds more to amount already given, but this gets complicated
// without that "not enough, please try again" could potentially suffice






















// see if i can change click listener to inputs instead

// set payNow button to go to verifcation if accepted
// and to have error message if not









  })();
  