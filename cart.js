(function(){
    
    let cartProducts = JSON.parse(localStorage.getItem("cartContent"));
    let cartArray = cartProducts.addedProducts
    let cartTable = document.querySelector("main")
    let tbl = document.createElement("table");
    tbl.style.width = "100%"
    let tblBody = document.createElement("tbody");
    const cartSubtotal = document.getElementById("subtotal")
    const cartTax = document.getElementById("tax")
    const cartTotalFooter = document.getElementById("cartTotal")
    
    // console.log(cartArray)
    // for (var x in cartArray) {
    //   console.log(x + ": " + cartArray[x])
  // }
    
 


    
     cartArray.forEach((element , index) => {
      
             
              let row = document.createElement("tr")
          
              let removeButton = document.createElement("button")
              
              removeButton.setAttribute("class" ,"material-icons")
              removeButton.innerText = "delete"
              removeButton.style.fontSize = "20px"
              removeButton.style.backgroundColor = "transparent"
              removeButton.style.border = "none"
              removeButton.style.color = "blueviolet"
              removeButton.setAttribute("id" , element.idNumber)
              
          
             
              
                let cell1 = document.createElement("td");
                let cell2 = document.createElement("td");
                let cell3 = document.createElement("td");
                cell1.style.height = "50px"
                cell1.innerText= `${element.quantity}`
                cell1.setAttribute("class" , "cart-tbl")

                cell2.style.height = "50px"
                cell2.innerText= `${element.name} `
                cell2.setAttribute("class" , "cart-tbl") 

                cell3.style.height = "50px"
                cell3.innerText= ` $${element.price}`
                cell3.setAttribute("class" , "cart-tbl")
               


                
                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
              
                tblBody.appendChild(row);
                tbl.appendChild(tblBody);
                cartTable.appendChild(tbl)

                row.appendChild(removeButton)
                

               
                let cartTotal = 0
                let taxes = 0
                // let subtotalCart = ` $${element.price * element.quantity}`;
                // let taxesCart = parseInt(subtotalCart) * 0.06
                // let realCartTotal = parseInt(subtotalCart + taxesCart)

              

                // cartSubtotal.innerText = ` $${element.price * element.quantity}`;
              

                // cartTax.innerText =  parseInt(cartSubtotal.innerText * 0.06)
              
                // cartTotal += cartSubtotal + cartTax
                // cartTotalFooter.innerText = parseInt(cartTotal)
               
                 
                
                
              

                
            

              })

              document.body.addEventListener("click" , event => {
                // console.log(event.target.id)

                for (let i=0; i<cartArray.length; i++) {
                  if (event.target.id === i ) {
                    console.log("hello")
                    cartArray.splice(i, 1)
                    localStorage.setItem('cartContent', JSON.stringify(cartArray));
                    
                  }
                  
                }
                 
                console.log(cartArray)  
          
              })

    
              for (let i=0; i<cartArray.length; i++) {
                console.log(cartArray[i])

                cartSubtotal.innerText = cartArray[i].quantity * cartArray[i].price
              }

    

             

              

        // productsInCart.innerText = cartArray[i].name
       

        

       
     



    

  







})();