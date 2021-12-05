(function () {
   
    //const thankYou= document.querySelector("span")
    //const customerName = document.querySelector("#first-name")
    
    // let userName = customerName.value
    // thankYou.innerText = `${userName}`

    //look into session storage on local storage

  let customerCart = document.querySelector("section > ul");

  let cartProducts = JSON.parse(localStorage.getItem("cartContent"));
  
  let summaryTotal = document.querySelector("section > span")
  let summarySection = document.querySelector("section")

  let checkoutTotal = 0;

  //let cartArray = cartProducts.addedProducts;
  let cartArray = [];
  if (cartProducts != null) {
    cartArray = cartProducts.addedProducts;
  }

  for (let i=0; i<cartArray.length; i++) {

    let cartItems = document.createElement("li");
    cartItems.innerText = `${cartArray[i].name} $${cartArray[i].price * cartArray[i].quantity}`;
    customerCart.append(cartItems);

    checkoutTotal += cartArray[i].price * cartArray[i].quantity;
    summaryTotal.innerText = `Total: $${checkoutTotal}`
    summarySection.append(summaryTotal)

  };

  const newOrder = document.querySelector("#place-new-order")

newOrder.addEventListener("click", function(){

  window.open("index.html", "_self");

  localStorage.clear();


})
    
})();