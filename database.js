const allPotions = [
    {
        name: 'Potion 1',
        price:4,
        category: "",
        description: ""
    },
    {
        name: 'Potion 2',
        price: 3,
        category: "",
        description: ""

    },
    {
        name: 'Potion 3',
        price:5,
        category: "",
        description: ""
    },
    {
        name: 'Potion 4',
        price: 5,
        category: "",
        description: ""

    },
    {
        name: 'Potion 5',
        price:4,
        category: "",
        description: ""
    },
    {
        name: 'Potion 6',
        price: 3,
        category: "",
        description: ""

    },
    {
        name: 'Potion 7',
        price:5,
        category: "",
        description: ""
    },
    {
        name: 'Potion 8',
        price: 5,
        category: "",
        description: ""
    },
    {
        name: 'Potion 9',
        price:5,
        category: "",
        description: ""
    
    },
    {
        name: 'Potion 10',
        price: 5, 
        category: "cold" ,
        description: "this is potion 10",

    },
    ]


    const Cart = {
        addedProducts: [
            {
                //details about the product
                name: "SAMPLE POTION 1", //You could denormalize this data, and store name and price, or pull that by sku from the menu
                price: 5,
                quantity: 2
            },
            {
                //details about the product
                name: "SAMPLE POTION 2",
                price: 3,
                quantity: 2
            }
        ]}