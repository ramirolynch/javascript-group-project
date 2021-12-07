(function(){
    
    let cartProducts = JSON.parse(localStorage.getItem("cartContent"));
   let cartArray = [];
    if (cartProducts != null) {
      cartArray = cartProducts;
    }
    let cartTable = document.querySelector("main")
    let tbl = document.createElement("table");
    tbl.style.width = "100%"
    let tblBody = document.createElement("tbody");
    const cartSubtotal = document.getElementById("subtotal")
    const cartTax = document.getElementById("tax")
    const cartTotalFooter = document.getElementById("cartTotal")
    const allFooter = document.querySelector("footer")

  
    


     if (localStorage.length > 0) {

     
     cartArray.forEach((element , index) => {

   
      
             
              let row = document.createElement("tr")
          
              let removeButton = document.createElement("button")
              
              removeButton.setAttribute("class" ,"material-icons")
              removeButton.innerText = "delete"
              removeButton.style.fontSize = "20px"
              removeButton.style.backgroundColor = "transparent"
              removeButton.style.border = "none"
              removeButton.style.color = "blueviolet"
              removeButton.style.lineHeight = "3"
              removeButton.setAttribute("id" , element.idNumber)
              
          
                let cell1 = document.createElement("td");
                let cell2 = document.createElement("td");
                let cell3 = document.createElement("td");


                cell1.style.height = "50px"
                cell1.innerText= `${element.quantity}`
               

                cell2.style.height = "50px"
                cell2.innerText= `${element.name} `
                

                cell3.style.height = "50px"
                cell3.innerText= ` $${element.price}`
               
               


                
                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
              
                tblBody.appendChild(row);
                tbl.appendChild(tblBody);
                cartTable.appendChild(tbl)

                row.appendChild(removeButton)
              })
            }

            let x = window.matchMedia("(max-width: 769px)")
            let numberOfRows = tbl.getElementsByTagName("tr").length
            if (numberOfRows <= 4 && x.matches){
              console.log("it works")
              allFooter.style.position = "fixed"
              
            } else if (numberOfRows >= 5 && x.matches) {
              console.log("no really it's working")
              allFooter.style.position = "relative"
            }
  
   
            

         
         
            


              let tempSubtotal = 0
              let cartTotal = 0


              if (localStorage.length > 0) {
              for (let i=0; i<cartArray.length; i++) {
                // console.log(cartArray[i])

                tempSubtotal += cartArray[i].quantity * cartArray[i].price
               
              }
            }

              cartSubtotal.innerText = tempSubtotal + ".00"

              cartTax.innerText = "$" + parseFloat(cartSubtotal.innerText * 0.06).toFixed(2)
              
              cartTotal += parseFloat(cartSubtotal.innerText * 0.06) +tempSubtotal

              cartTotalFooter.innerText = `$${cartTotal}`

// ramiro added this 
    document.body.addEventListener('click', event => {

      for(let i=0; i<cartArray.length; i++) {
      
        if(parseInt(event.target.id) === cartArray[i].idNumber) {

          cartArray.splice(i, 1)
         
          localStorage.setItem('cartContent', JSON.stringify(cartArray))
          break;
        }
      }
      
    event.target.parentNode.remove();
    window.location.reload();
    
    })
// end of ramiro's addition


             

              


       


})();