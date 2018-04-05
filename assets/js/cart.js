var cartMenu = document.getElementById("cart");
var cartTotalCounter = document.getElementById("cart-total");
var cartItemList = document.getElementById("cart-items");
var cartTotal = sessionStorage.getItem("cartTotal");
var cartStored = "empty";
var cartStored = sessionStorage.getItem("cartStored");

console.log(cartStored);

var result = "empty";

cartTotalCounter.innerHTML = cartTotal;
cartItemList.innerHTML = cartStored;

console.log(cartTotal);

if (cartTotal){
  cartMenu.style.display = "block";
} else {cartMenu.style.display = "none";}


// BASIC CART FUNCTION - JUST GOES UP BY 1 //
// function addToCart(){
//   cartTotal ++;
//   console.log(cartTotal);
//   cartTotalCounter.innerHTML = cartTotal;
//   sessionStorage.setItem("cartTotal", cartTotal);
//   if (cartTotal){
//   cartMenu.style.display = "block";
// } else {cartMenu.style.display = "none";}
// }

function addToCart(){
cartTotal ++;
//   console.log(cartTotal);
cartTotalCounter.innerHTML = cartTotal;
sessionStorage.setItem("cartTotal", cartTotal);
if (cartTotal){
cartMenu.style.display = "block";
} else {cartMenu.style.display = "none";}
// ----
var result = "";
var i;
for (i = 0; i < arguments.length; i++) {
  result += arguments[i] + "<br />";
}
console.log(result);
console.log(cartTotal);
if (cartItemList.innerHTML === "empty") {cartItemList.innerHTML = result} else {cartItemList.innerHTML = cartItemList.innerHTML + result;}
cartStored = cartItemList.innerHTML;
sessionStorage.setItem("cartStored", cartStored);
console.log(cartStored);
}
