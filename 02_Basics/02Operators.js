// "use strict"  -----> used for clean and safe running


var sellingPrice= 199;
var listingPrice= 799;

var discountPercent = (( listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount percentage is : "+ discountPercent);
displayDiscountPercent = Math.round(discountPercent);
console.log("approx : "+displayDiscountPercent);


// -------------> DATA TYPES <---------------
let name = "shashank"
let age = 20
let isLoggedIn = false
let state = null

console.log(typeof "shashank")
console.log(typeof 20)
console.log(typeof null)
console.log(typeof undefined)