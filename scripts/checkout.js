import { getdeliveryOptionById } from "../data/cart.js";
import { getProductById } from "../data/products.js";
import {
  getPriceDollars,
  getDeliveryDate,
  longestShippingDays,
  mediumShippingDays,
  expressShippingDays,
  deliveryOptions,
} from "./utils.js";
import { cart, deleteFromCart } from "../data/cart.js";

// var cart = []
// cart= 
// [
//   {
//       "productId": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//       "quantity": 3,
//       "deliveryOptionId":"1"
//   },
//   {
//       "productId": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//       "quantity": 2,
//       "deliveryOptionId":"3"
//   },
//   {
//       "productId": "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
//       "quantity": 1,
//       "deliveryOptionId":"2"
//   }
// ]

renderCart();

function deliveryOptionsHTML(cartItem) {
  let html = "";
  deliveryOptions.forEach((option) => {
    console.log(option);
    if (option.id === "1") {
      option.deliveryPrice = "FREE";
    }
    const isChecked = option.id === cartItem.deliveryOptionId;
    console.log(isChecked)
    console.log(cartItem.deliveryOptionId)
    html += `
        <div class="delivery-option">
          <input type="radio" 
          ${isChecked ? "checked" : ""}
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}">
          <div>
            <div class="delivery-option-date">
            ${getDeliveryDate(option.deliveryTime)}
            </div>
            <div class="delivery-option-price">
            ${option.deliveryPrice} Shipping 
            </div>
          </div>
        </div>
        `;
  });

  return html;
}

export function renderCart() {
  let cartProductsHTML = "";

  cart.forEach((cartItem) => {
    console.log(cartItem);
    const { image, name, priceCents } = getProductById(cartItem.productId);
    console.log(image, name, priceCents);
    if (!image || !name || !priceCents) {
      console.log("Product not found");
    } else {
      console.log(image, name, priceCents);
    }
    const {deliveryTime, deliveryPrice }  = getdeliveryOptionById(cartItem.deliveryOptionId);

    const html = `
    <div class="cart-item-container js-cart-item-container-${
      cartItem.productId
    }">
    <div class="delivery-date">
      Delivery date: ${getDeliveryDate(deliveryTime)}
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${image}">

      <div class="cart-item-details">
        <div class="product-name">
        ${name}
        </div>
        <div class="product-price">
        ${getPriceDollars(priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label"> ${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary js-update-quantity-link">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete-quantity-link" data-item-id="${
            cartItem.productId
          }">
            Delete
          </span>
        </div>
      </div>
      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
      ${deliveryOptionsHTML(cartItem)}  
      </div>
      </div>
  </div>
     `;
    cartProductsHTML += html;
  });

  document.querySelector(".js-order-summary").innerHTML = cartProductsHTML;
}

getDeleteQuantityButton();

function getDeleteQuantityButton() {
  var deleteButtons = [];

  deleteButtons = document.querySelectorAll(".js-delete-quantity-link");

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const productId = deleteButton.dataset.itemId;
      console.log(cart);
      deleteFromCart(productId);
      const productContainer = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      console.log(productContainer);
      productContainer.remove();
    });
  });
}

function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }  
  });

}