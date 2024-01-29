// import { cart } from "../data/cart.js";
import { getProductById } from "../data/products.js";
import { getPriceDollars } from "./utils.js";
import { cart, deleteFromCart } from "../data/cart.js";



renderCart();

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

    const html = `
    <div class="cart-item-container js-cart-item-container-${cartItem.productId}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
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
          <span class="delete-quantity-link link-primary js-delete-quantity-link" data-item-id="${cartItem.productId}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
     `;
    cartProductsHTML += html;
  });

  document.querySelector(".js-order-summary").innerHTML = cartProductsHTML;
} 

getDeleteQuantityButton()

function getDeleteQuantityButton() {
  var deleteButtons = [];

  deleteButtons = document.querySelectorAll(".js-delete-quantity-link");

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
    const productId = deleteButton.dataset.itemId;
    console.log(cart);
   deleteFromCart(productId);
   const productContainer= document.querySelector(`.js-cart-item-container-${productId}`);
   console.log(productContainer)
   productContainer.remove();

    });
    
  });

}