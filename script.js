
(function(){

    const allPotionsItems = document.querySelectorAll('.potions')


    for (let i=0; i<allPotions.length; i++) {
    
        allPotionsItems[i].innerText = `${allPotions[i].name} (${allPotions[i].category}) $${allPotions[i].price}`
    }


//    const cartArea = document.querySelector('#cartList')
   
//    let total = 0;

//     document.body.addEventListener('click', event => {

//         const listItem = document.createElement('li')
        
//         const id = event.target.id
//         listItem.innerText = `${allPotions[id].name} $${allPotions[id].price}`
//         total += parseInt(allPotions[id].price)

//         cartArea.append(listItem)
         
//         if (document.querySelector('#totalCart')) {
//             document.querySelector('#totalCart').remove()
//         }

//         let totalCart = document.createElement('li')
//         totalCart.setAttribute('id', 'totalCart')
//         totalCart.innerText = `Total: $${total}`

//         cartArea.append(totalCart)   
        
//     })


    const hotButton = document.querySelector('nav>ul>li:nth-child(1)');
    const coldButton = document.querySelector('nav>ul>li:nth-child(2)');

    
    hotButton.addEventListener('click', event => {

        if (event.target.id === 'hot' && event.target.style.backgroundColor !== 'black') {


            hotButton.style.backgroundColor = 'black';
            coldButton.style.backgroundColor = 'blueviolet';

            for (let i=0; i<allPotions.length; i++) {

                if(allPotions[i].category === 'Hot') {
    
                allPotionsItems[i].style.display = 'flex';

            }
            else {

                    allPotionsItems[i].style.display = 'none';
                
            }   
        }

    }

})

coldButton.addEventListener('click', event => {

    if (event.target.id === 'cold') {

        hotButton.style.backgroundColor = 'blueviolet';
        coldButton.style.backgroundColor = 'black';

        for (let i=0; i<allPotions.length; i++) {

            if(allPotions[i].category === 'Cold') {

            allPotionsItems[i].style.display = 'flex';

        }
        else {

            allPotionsItems[i].style.display = 'none';

        }

    }

}

})



})();