var cartMenu = document.getElementById("cart");
var cartTotalCounter = document.getElementById("cart-total");
var cartItemList = document.getElementById("cart-items");
var cartTotal = sessionStorage.getItem("cartTotal");
var cartStored = "empty";
var cartStored = sessionStorage.getItem("cartStored");
var totalPrice = 0;
var interimPrice = sessionStorage.getItem("totalPrice");
var totalPrice = Number(interimPrice);
var priceDisplay = document.getElementById("price-total");
var result = "empty";

cartTotalCounter.innerHTML = cartTotal;
if (cartItemList) {cartItemList.innerHTML = cartStored};
if (priceDisplay) {priceDisplay.innerHTML = "£" + totalPrice};

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
      result += "<li>" + arguments[i] + "<button onclick='addAnother("+ String(arguments[i]) +")'>+</button><button onclick='removeFromCart("+ arguments[i] +")'>-</button></li>";
    }
    if(window.location.href.indexOf("cart") > -1) {
        cartItemList.innerHTML = cartStored;
        if (cartItemList.innerHTML === "empty") {cartItemList.innerHTML = result} else {cartItemList.innerHTML = cartItemList.innerHTML + result;}
        cartStored = cartItemList.innerHTML;
        sessionStorage.setItem("cartStored", cartStored);
    } else if (cartStored) {
        cartStoredNew = cartStored + result;
        cartStored = cartStoredNew;
        sessionStorage.setItem("cartStored", cartStored);
    } else {
        cartStoredNew = result;
        cartStored = cartStoredNew;
        sessionStorage.setItem("cartStored", cartStored);
    }
}

function addPrice(price){
    newPrice = totalPrice + price;
    totalPrice = newPrice;
    sessionStorage.setItem("totalPrice", totalPrice);
    priceDisplay.innerHTML = "£" + totalPrice;
}

function addAnother(whatsAdded){
    console.log(whatsAdded);
}

function removeFromCart(){
    console.log();
}