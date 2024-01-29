import { products } from "../data/products.js";
import { getAddToCartButton } from "../data/cart.js";
import { getPriceDollars } from "./utils.js";

var ratingStars = 0;

// document.addEventListener('DOMContentLoaded', function () {
//   renderProducts(); // Call your function here
// });

renderProducts();
export function renderProducts() {
  let productsHTML = "";

  products.forEach((product) => {
    ratingStars = product.rating.stars * 10;

    const html = `
    <div class="product-container">
   

    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${ratingStars}.png">
      <div class="product-rating-count link-primary">
      ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${getPriceDollars(product.priceCents)} 
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart-button" id="addToCartButton"  data-product-id="${
      product.id
    }" >
      Add to Cart
    </button>

  </div>


     `;
    productsHTML += html;
  });
  document.querySelector(".js-products-grid").innerHTML = productsHTML;
}

getAddToCartButton();

