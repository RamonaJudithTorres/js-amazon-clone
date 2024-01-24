import { products } from "../data/products.js";
var ratingStars = 0;
var priceDollars = 0;
var addToCartButtons = [];


renderProducts();

function renderProducts() {
  let productsHTML = "";

  products.forEach((product) => {
    ratingStars = product.rating.stars * 10;
    priceDollars = product.priceCents / 100;
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
      $${priceDollars.toFixed(2)} 
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

addToCart();
function addToCart() {
  addToCartButtons = document.querySelectorAll(".js-add-to-cart-button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;

      let matchingItem;
      // Starting with the first item added 
      let totalItems = 1;

      cart.forEach((item) => {
        totalItems += item.quantity ;

        if (productId === item.productId) {
          matchingItem = item;
        };
      });
      
      if (matchingItem){
        matchingItem.quantity += 1;
      }else{
        cart.push({ productId, quantity: 1 });
      }
      console.log(cart);
      console.log("total ITEMS " + totalItems);
      document.querySelector(".js-cart-quantity").innerHTML = totalItems;
    });

  });
  return;
}
