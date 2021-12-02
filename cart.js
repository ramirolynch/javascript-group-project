(function(){
    
    let cartProducts = JSON.parse(localStorage.getItem("cartContent"));
    let cartArray = cartProducts.addedProducts
    let cartTable = document.querySelector("main")
    let tbl = document.createElement("table");
    tbl.style.width = "100%"
    let tblBody = document.createElement("tbody");
    
    // console.log(cartArray)
    // for (var x in cartArray) {
    //   console.log(x + ": " + cartArray[x])
  // }
    
 


    
     cartArray.forEach((element) => {
        
        
            // for (let r = 0; r < cartArray.length; r++) {
             
              let row = document.createElement("tr")
              let editButton = document.createElement("button")
              let removeButton = document.createElement("button")
              let addIcon = document.createElement("i")
              let removeIcon = document.createElement("i")
              let lineBreak = document.createElement("span")
      
              
    
            
             
              addIcon.setAttribute("class" ,"material-icons")
              addIcon.innerText = "add_circle"
              addIcon.style.fontSize = "13px"
              removeIcon.setAttribute("class" ,"material-icons")
              removeIcon.innerText = "remove_circle"
              removeIcon.style.fontSize = "13px"


              editButton.innerText = "edit"
              editButton.setAttribute("class" ,"cart-buttons")
              editButton.style.align
              removeButton.innerText = "remove"
              removeButton.setAttribute("class" ,"cart-buttons")
              
          
             
              
                let cell1 = document.createElement("td");
                let cell2 = document.createElement("td");
                let cell3 = document.createElement("td");
                cell1.style.height = "50px"
                cell1.innerText= `${element.name} `
                cell1.setAttribute("class" , "cart-tbl")

                cell2.style.height = "50px"
                cell2.innerText= `${element.quantity}`
                cell2.setAttribute("class" , "cart-tbl") 

                cell3.style.height = "50px"
                cell3.innerText= ` $${element.price}`
                cell3.setAttribute("class" , "cart-tbl")
               


                
                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
                editButton.append(lineBreak)
                tblBody.appendChild(row);
                tbl.appendChild(tblBody);
                cartTable.appendChild(tbl)
                row.appendChild(editButton)
                row.appendChild(removeButton)
                editButton.appendChild(addIcon)
                editButton.appendChild(removeIcon)

                removeButton.addEventListener("click" , event => {
                  console.log(event)
            
                })

                let cartTotal = 0

                
            

              })

    

    

             

              

        // productsInCart.innerText = cartArray[i].name
       

        

       
     



    

  







})();