import { deliveryOptions } from "../scripts/utils.js";

export var cart = JSON.parse(localStorage.getItem("cart"));

var addToCartButtons = [];

export function getAddToCartButton() {
  addToCartButtons = document.querySelectorAll(".js-add-to-cart-button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      console.log(cart);
    });
  });
  return;
}

export function saveToStorage(){
  localStorage.setItem("cart", JSON.stringify(cart))
}

function addToCart(productId) {
  if (cart === null) {
    cart = [];
  }
  let matchingItem;
  // Starting with the first item added
  let totalItems = 1;

  cart.forEach((item) => {
    totalItems += item.quantity;

    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveToStorage()
  document.querySelector(".js-cart-quantity").innerHTML = totalItems;
}


export function deleteFromCart(productId) {
  const newCart= [];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  console.log(cart);
  saveToStorage()
}


export function getdeliveryOptionById(id) {
  console.log("llamando getdeliveryOptionById con el ID: "+ id)
  const option = deliveryOptions.find(option => option.id === id);
  console.log(option)
  

  if (option) {
    var { deliveryTime, deliveryPrice} = option;
    return {deliveryTime, deliveryPrice };
  } else {
    console.log("The given id did not return an option")
    return null; 
  }
}