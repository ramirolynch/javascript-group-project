(function () {
   
    const thankYou= document.querySelector("span")
    const customerName = document.querySelector("#first-name")
    
    let userName = customerName.value
    thankYou.innerText = `${userName}`
    
      })();