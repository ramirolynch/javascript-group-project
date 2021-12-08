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
//let cartArray = cartProducts.addedProducts;
let summaryTotal = document.querySelector("#total");
let summaryTax = document.querySelector("#tax")
let summarySubtotal = document.querySelector("#subtotal")


let checkoutSubtotal = 0;

let checkoutTotal = 0;

let cartArray = [];


  if (cartProducts != null) {
    cartArray = cartProducts;
  }


for (let i=0; i<cartArray.length; i++) {

  let cartItems = document.createElement("li");
  cartItems.innerText = `${cartArray[i].name} $${cartArray[i].price * cartArray[i].quantity}`;
  customerCart.append(cartItems);

  checkoutSubtotal += cartArray[i].price * cartArray[i].quantity;
  summarySubtotal.innerText = `Subtotal: $${checkoutSubtotal}.00`
  summaryTax.innerText = "Tax: $" + (checkoutSubtotal * .06)
  summaryTotal.innerText = "Total: $" + (checkoutSubtotal + (checkoutSubtotal * .06))
  
  
};
 

// change back calculator

document.getElementById("cash-input").addEventListener("change", function(){
  let cashGiven = parseFloat(document.getElementById("cash-input").value);
  let changeBack = document.querySelector("#change-back");

  let changeTotal = cashGiven - (checkoutSubtotal + (checkoutSubtotal * .06));

  if (cashGiven < (checkoutSubtotal + (checkoutSubtotal * .06))){
    changeBack.innerText = `Total is higher than cash given, please add at least $${(changeTotal*-1).toFixed(2)} and try again.`;
  } else if (cashGiven >= (checkoutSubtotal + (checkoutSubtotal * .06))){
    changeBack.innerText = `$${changeTotal.toFixed(2)}`;
  } else {
    moreMoney.innerText = "Error, please try again with valid cash amount."
  }

});

// stop enter from reloading page on cash input
cashForm.addEventListener("submit", event => {

  event.preventDefault()

})

// 
const payNow = document.querySelector("#pay-now-button")

payNow.addEventListener("click", function(){

  window.open("ordercomplete.html", "_self");

})


























// see if i can change click listener to inputs instead

// set payNow button to go to verifcation if accepted
// and to have error message if not









  })();
  