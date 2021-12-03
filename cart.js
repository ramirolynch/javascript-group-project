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
    
 


    
     cartArray.forEach((element , index) => {
      
        
        
            // for (let r = 0; r < cartArray.length; r++) {
             
              let row = document.createElement("tr")
          
              let removeButton = document.createElement("button")
              let addIcon = document.createElement("i")
              let removeIcon = document.createElement("i")
              let lineBreak = document.createElement("br")
      
              
    
            
             
              addIcon.setAttribute("class" ,"material-icons")
              addIcon.innerText = "add_circle"
              addIcon.style.fontSize = "13px"
              removeIcon.setAttribute("class" ,"material-icons")
              removeIcon.innerText = "remove_circle"
              removeIcon.style.fontSize = "13px"


             
              removeButton.innerText = "remove"
              removeButton.setAttribute("class" ,"cart-buttons")
              removeButton.setAttribute("id" , element.idNumber)
              
          
             
              
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
              
                tblBody.appendChild(row);
                tbl.appendChild(tblBody);
                cartTable.appendChild(tbl)

                row.appendChild(removeButton)
                

               

                // let cartTotal = 0

                
            

              })

              document.body.addEventListener("click" , event => {
                console.log(event.target.id)

                for (let i=0; i<cartArray.length; i++) {
                  if (event.target.id === i ) {
                    console.log("hello")
                    cartArray.splice(i, 1)
                    localStorage.setItem('cartContent', JSON.stringify(cartArray));
                    
                  }
                  
                }
                 
                console.log(cartArray)  
          
              })

    

    

             

              

        // productsInCart.innerText = cartArray[i].name
       

        

       
     



    

  







})();