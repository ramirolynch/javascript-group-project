const allPotions = [
    {
        name: 'Draught of Peace',
        price:4,
        category: 'Cold',
        description: 'Relieves anxiety and agitation',
    },
    {
        name: 'Amortentia',
        price: 3,
        category: 'Hot',
        description: 'Induces an intense artificial love',

    },
    {
        name: 'Beautification Potion',
        price:5,
        category: 'Cold',
        description: 'Makes one temporarily attractive',
    },
    {
        name: 'Wolfsbane Potion',
        price: 5,
        category: 'Hot',
        description: 'Relieves the effects of lycanthropy',

    },
    {
        name: 'Skele-Gro',
        price:4,
        category: 'Cold',
        description: 'Causes lost bones to regrow',
    },
    {
        name: 'Invisibility Potion',
        price: 3,
        category: 'Hot',
        description: 'Renders one temporarily invisible',

    },
    {
        name: 'Veritaserum',
        price:5,
        category: 'Cold',
        description: 'Forces the user to tell the truth when questioned',
    },
    {
        name: 'Polyjuice Potion',
        price: 5,
        category: 'Hot',
        description: 'Changes appearance to match the hairs bearer',
    },
    {
        name: 'Felix Felicis',
        price:5,
        category: 'Cold',
        description: 'Temporarily grants the recipient luck',
    
    },
    {
        name: 'Elixir of Life',
        price: 5, 
        category: 'Cold' ,
        description: 'Extends ones life indefinitely',
        idNumber: 3

    },
    ]


    const Cart = {
        addedProducts: [
            {
                //details about the product
                name: "SAMPLE POTION 1", //You could denormalize this data, and store name and price, or pull that by sku from the menu
                price: 5,
                quantity: 2,
                idNumber: 0
            },
            {
                //details about the product
                name: "SAMPLE POTION 2",
                price: 3,
                quantity: 2,
                idNumber: 1
            }
        ]}