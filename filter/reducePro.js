    // let shoppingCart = [{
    //     product: 'phone',
    //     qty: 1,
    //     price: 699
    // },
    // {
    //     product: 'Screen Protector',
    //     qty: 1,
    //     price: 9.98
    // },
    // {
    //     product: 'Memory Card',
    //     qty: 2,
    //     price: 20.99
    // }
    // ];

    // let total = shoppingCart.reduce( (acc, curr)=> {
    //     return acc + curr.qty *curr.price; ;
    // },0);
    
    // console.log(total);


    const groceryStore = [
         {
             name: 'Chicken', 
             price: 200, 
             quantity: 50
         },
         {
             name: 'Beef', 
             price: 550, 
             quantity: 500
         },
         {
             name: 'Mutton', 
             price: 400, 
             quantity: 800
         },
    ];

    const totalPrice = groceryStore.reduce( (acc, curr) => {
        return acc + curr.quantity * curr.price;
    },0)

    console.log(totalPrice)