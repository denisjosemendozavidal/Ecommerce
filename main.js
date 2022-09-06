
const addedToCartBody = document.querySelector(".added-to-cart-body"); //Taking this out to be able to use it in multiple functions.

//the burger

const Burger = document.querySelector("#Burger");
const Nav = document.querySelector("#nav-elements-grandpa");

Burger.addEventListener("click", function () {
    Nav.classList.toggle("nav-elements-grandpa-show");
    
});

//Slider

let counter = 1;
      setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
          counter = 1;
        }
      }, 3000);

//Catalogue

import { dataDB } from "./js/data.js";


const containerArticule = document.querySelector(".product-list-container");

let html = "";

dataDB.forEach(({id, name, price, Stock, urlImage}) => {
    html += 
    `<div class="articule">
        <div class="articule-img">
            <img src="${urlImage}" alt="">
        </div>
        <div class="articule-body" id="${id}">
            <h2 class="articule-body-title">${name}</h2>
            <p>Price:$ ${price}</p>
            <p>Stock: ${Stock}</p>
            <button class="btn btn-add">Add to Cart</button>
        </div>
    </div>`
});

containerArticule.innerHTML = html;


//Cart button, showing the added to cart

const cartButton = document.querySelector("#cart-button");
const addedToCart = document.querySelector("#added-to-cart")

cartButton.addEventListener("click", () => {
    addedToCart.classList.toggle("added-to-cart-show");
})

//Adding items to the cart

let cart = {};

containerArticule.addEventListener("click", (e)=>{
    
    if (e.target.classList.contains("btn-add")) {
        const IdArticule = +e.target.parentElement.id;
        
        const findArticule = dataDB.find((articule) => articule.id === IdArticule);
        
        if (cart[IdArticule]) {
            alert("This Item is already added to the cart, please click on the shopping cart icon to add more units of this Item.")
        } else {
            cart[IdArticule] = findArticule;
            cart[IdArticule].amount= 1;  
        }
        showingAddedItems();
    }
});

function showingAddedItems() {
    let html = ` `;
    
    const addedItemsArray = Object.values(cart);
    

    addedItemsArray.forEach(({id, name, price, Stock, urlImage, amount}) => {
        html += `
            <div class="added-to-cart-item">
                <div class="added-to-cart-item-img">
                    <img src="${urlImage}" alt="added-to-cart-item-img">
                </div>
                <div class="added-to-cart-item-name">${name}</div>
                <div class="added-to-cart-item-options" id="${id}">
                    <span id="amount">Added to cart: ${amount}</span>
                    <span id="Stock">In stock: ${Stock-amount}</span>
                    <span>Subtotal:$ <span id="Subtotal">${price*amount}</span></span>
                    <div class="added-to-cart-item-options-icons">
                        <img class="plus-icon" src="/images/plus.svg" alt="Plus-icon">
                        <img class="minus-icon" src="/images/minus.svg" alt="Minus-icon">
                        <img class="trash-icon" src="/images/trash.svg" alt="Trash-icon">
                    </div>
                </div>
            </div>
        `
    });
    addedToCartBody.innerHTML = html; //This is what shows in the cart.
    
   

    
}

//Substracting, adding and/or eliminating Items from the cart


addedToCartBody.addEventListener("click", (e) => {
    
    
    if (e.target.classList.contains("plus-icon")) {
        const idArticule = +e.target.parentElement.parentElement.id;
        cart[idArticule].amount++;
            if (cart[idArticule].amount > cart[idArticule].Stock) {
                alert("Sorry, that is all we have in Stock for this item.!");
                cart[idArticule].amount--;
            }
    };
    if (e.target.classList.contains("minus-icon")) {
        const idArticule = +e.target.parentElement.parentElement.id;
        cart[idArticule].amount--;
            if (cart[idArticule].amount === 0) {
                delete cart[idArticule];
            }
    };
    if (e.target.classList.contains("trash-icon")) {
        const idArticule = +e.target.parentElement.parentElement.id;
        delete cart[idArticule];
    };
    
    
    
    showingAddedItems()
    

});

//Adding to the total. 













