(function () {
   
const cash = document.querySelector("#cash")
const card = document.querySelector("#card")

const cardInfoForm = document.querySelector("#card-information")
const cashForm = document.querySelector("#cash-amount")


// show/hide cash or card forms

cardInfoForm.style.display= "none"

cashForm.style.display= "none"


cash.addEventListener('click', function(){
    cardInfoForm.style.display = "none"
    cashForm.style.display = ""

});
card.addEventListener('click', function(){
  cardInfoForm.style.display = ""
  cashForm.style.display = "none"
});



// order summary from local storage cart

let customerCart = document.querySelector("section > ul");

let cartProducts = JSON.parse(localStorage.getItem("cartContent"));
let cartArray = cartProducts.addedProducts;
let summaryTotal = document.querySelector("section > span")
let summarySection = document.querySelector("section")

let checkoutTotal = 0;

for (let i=0; i<cartArray.length; i++) {

  let cartItems = document.createElement("li");
  cartItems.innerText = `${cartArray[i].name} $${cartArray[i].price * cartArray[i].quantity}`;
  customerCart.append(cartItems);

  checkoutTotal += cartArray[i].price * cartArray[i].quantity;
  summaryTotal.innerText = `Total: $${checkoutTotal}`
  summarySection.append(summaryTotal)


};

// change back calculator

document.getElementById("cash-input").addEventListener("change", function(){
  let cashGiven = parseFloat(document.getElementById("cash-input").value);
  let changeBack = document.querySelector("#change-back");

  let changeTotal = cashGiven - checkoutTotal;

  changeBack.innerText = `$${changeTotal.toFixed(2)}`;

});























// see if i can change click listener to inputs instead

// set payNow button to go to verifcation if accepted
// and to have error message if not









  })();
  