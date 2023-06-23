// corrext a bug
var cart = [
    {id: 1,name: 'Item A',quantity: 2},
    {id: 2,name: 'Item B',quantity: 3},
];

function fixCartBug(cart) {
    var correctedCart = [];
    for(var i =0; i<cart.length; i++) {
        var item = cart[i];
        var correctedQuantity = item.quantity*2;
        var correctedItem = {
           id: item.id,
           name: item.name,
           quantity: correctedQuantity,
        };
        correctedCart.push(correctedItem);
    }
    return correctedCart;
}