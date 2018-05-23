/* JavaScript code here */
// Task5
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//5
function addItem(newItem){
    cart.push(newItem);
    console.log(cart);
}
var newItem={name:"Watch", price:64, quatity:1};
addItem();

