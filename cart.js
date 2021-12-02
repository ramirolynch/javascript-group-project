(function(){
    let list = document.querySelector("ul")
    let cartProducts = JSON.parse(localStorage.getItem("cartContent"));
    let cartArray = cartProducts.addedProducts
    let cartTable = document.querySelector("main")
    
    
    
     cartArray.forEach((element) => {
        console.log(element)
        
            let tbl = document.createElement("table");
            tbl.style.width = "100%"
        
            let tblBody = document.createElement("tbody");
          
            // for (let r = 0; r < cartArray.length; r++) {
             
              let row = document.createElement("tr")
              
            
          
            //   for (let j = 0; j < cartArray.length; j++) {
              
                let cell = document.createElement("td");
                cell.style.height = "50px"
                cell.innerText= `${element.name} ${element.quanity} $${element.price}  `
                cell.setAttribute("class" , "cart-tbl")
                row.appendChild(cell);
                tblBody.appendChild(row);
                tbl.appendChild(tblBody);
                cartTable.appendChild(tbl)

              })

              

        // productsInCart.innerText = cartArray[i].name
       

        // let editButton = document.createElement("button")
        // let removeButton = document.createElement("button")

        // editButton.innerText = "edit"
        // removeButton.innerText = "remove"

        // list.append(productsInCart)
        // console.log("hello")
     



    

  







})();