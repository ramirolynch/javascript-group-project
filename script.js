
(function(){


    const allPotionsItems = document.querySelectorAll('.potions')


    for (let i=0; i<allPotions.length; i++) {
    
        allPotionsItems[i].innerText = `${allPotions[i].name} $${allPotions[i].price}`
    }


   const cartArea = document.querySelector('#cartList')
   
   let total = 0;

    document.body.addEventListener('click', event => {

        const listItem = document.createElement('li')
        
        const id = event.target.id
        listItem.innerText = `${allPotions[id].name} $${allPotions[id].price}`
        total += parseInt(allPotions[id].price)

        cartArea.append(listItem)
         
        if (document.querySelector('#totalCart')) {
            document.querySelector('#totalCart').remove()
        }

        let totalCart = document.createElement('li')
        totalCart.setAttribute('id', 'totalCart')
        totalCart.innerText = `Total: $${total}`

        cartArea.append(totalCart)    

        console.log(total)

    })



})();