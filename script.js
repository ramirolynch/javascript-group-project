(function(){

    const allPotions = [
        {
            name: 'Potion 1',
            price:4
        },
        {
            name: 'Potion 2',
            price: 3

        },
        {
            name: 'Potion 3',
            price:5
        },
        {
            name: 'Potion 4',
            price: 5

        },
        {
            name: 'Potion 5',
            price:4
        },
        {
            name: 'Potion 6',
            price: 3

        },
        {
            name: 'Potion 7',
            price:5
        },
        {
            name: 'Potion 8',
            price: 5

        },
        {
            name: 'Potion 9',
            price:5
        },
        {
            name: 'Potion 10',
            price: 5

        },
        ]

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
        
        let totalCart = document.querySelector('#totalCart')
        totalCart.innerText = `Total: $${total}`
        
        cartArea.append(listItem)
        
        

        console.log(total)

    })



})();