
(function(){

    const allPotionsItems = document.querySelectorAll('.potions')


// lists all of the products in the initial page
for (let i=0; i<allPotions.length; i++) {

    allPotionsItems[i].innerText = `${allPotions[i].name} (${allPotions[i].category}) $${allPotions[i].price}`
}



// getting category buttons
const hotButton = document.querySelector('nav>ul>li:nth-child(1)');
const coldButton = document.querySelector('nav>ul>li:nth-child(2)');
  
    // hot button category functionality
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

// cold button category functionality
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

// this is the pop up functionality

    const productSection = document.querySelector('#productSection')
    const cartAside = document.querySelector('#cartAside')

    const cartArea = document.querySelector('#cartList')

    const footer = document.querySelector('footer')
    const footerButton = document.querySelector('footer>button')
   

    const addsubstractUl = document.createElement('ul')
    addsubstractUl.classList.add('flex')

    const addButton = document.createElement('li')
    const itagAddButton = document.createElement('i')
    itagAddButton.classList.add('material-icons')
    itagAddButton.innerText = 'add'

    const substractButton = document.createElement('li')
    const itagRemoveButton = document.createElement('i')
    itagRemoveButton.classList.add('material-icons')
    itagRemoveButton.innerText = 'remove'

    let totalCart = document.createElement('span')
    totalCart.setAttribute('id', 'totalCart')
    totalCart.style.color = 'white'
    totalCart.style.marginRight = '1.5em'
    totalCart.innerText = `Total: $ 0.00`

    footer.append(totalCart)   

    let id;

    productSection.addEventListener('click', event => {

        productSection.style.display = 'none';
        cartAside.style.display = 'block';
        footerButton.innerText = 'Add to Cart'

        const listItem = document.createElement('li')
        
        id = event.target.id
        listItem.setAttribute('id', id)
        listItem.innerText = `${allPotions[id].name} (${allPotions[id].category}) $${allPotions[id].price}`

       
        addButton.append(itagAddButton)
        substractButton.append(itagRemoveButton)
        
        addsubstractUl.append(addButton)
        addsubstractUl.append(substractButton)

        listItem.classList.add('addToCart')

        cartArea.append(listItem)
        
        listItem.append(addsubstractUl)
         
        if (document.querySelector('#totalCart')) {
            document.querySelector('#totalCart').remove()
        }

        totalCart.innerText = `Total: $ 0.00`

        footer.append(totalCart)   
        
    })

    let total = 0;

    addsubstractUl.addEventListener('click', event => {

    if (event.target.innerText === 'add') {

        total += parseInt(allPotions[id].price)
        totalCart.innerText = `Total: $${total}.00`

        //Cart.push(Cart.addedProducts.name = 'test')
        //console.log(Cart)


    } else if (event.target.innerText === 'remove') {
        total -= parseInt(allPotions[id].price)

        if (total >= 0) {
        totalCart.innerText = `Total: $${total}.00`
        }
        else {
            totalCart.innerText = `Total: $ 0.00`
        }

    }

    })




})();