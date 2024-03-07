var sellingPrice= 199;
var listingPrice= 799;

var discountPercent = (( listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount percentage is : "+ discountPercent);
displayDiscountPercent = Math.round(discountPercent);
console.log("approx : "+displayDiscountPercent);