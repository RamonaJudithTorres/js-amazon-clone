export const cart = []
var addToCartButtons = [];


export function getAddToCartButton(){
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
  
  
  function addToCart(productId) {
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
        document.querySelector(".js-cart-quantity").innerHTML = totalItems;
  }
  
