
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

dataDB.forEach(({id, name, price, Stock, urlImage, type}) => {
    html += 
    `<div class="articule all ${type}">
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
                    <span>Subtotal:$ <span class="Subtotal">${price*amount}</span></span>
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
    
   //Getting the total price
    

    const carttotal = document.querySelector(".added-to-cart-total")

    
        let totaltext = "";
        let totalnumber = 0;
        addedItemsArray.forEach(({ price, amount}) => { 
        let subtotalnumber = price*amount;
        totalnumber += subtotalnumber;
        
        })
        totaltext += `
        <h2>Total: $<span id="total">${totalnumber}</span></h2>
        <button class="buynow" id="buynow">Buy now</button> `;
        carttotal.innerHTML= totaltext;
    
    
    //Adding alert badge on shopping cart.

    const alertBadgeContainer = document.querySelector(".alertbadge")
    const amountOfAddedItems = addedToCartBody.childElementCount;
    const alertBadgeContent = `<p>${amountOfAddedItems}</p>`;

    alertBadgeContainer.innerHTML = alertBadgeContent;

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

//Adding effects to .identity

let changingtext = new Typed (".identity", {
    strings: ["Hi there, nice having you here, I'm lumus, and this is my story. I was born, (not too long ago lol), from the love of my parents, who thought that my excentricity and tie dye based style would light the world up with a little bit of love, hapiness and understanding. I also love music and my go to for a great evening is always watching series over going to parties. Please reach out to me, I want to hear from you."],
    typeSpeed: 80,
    backSpeed: 50, 
    loop: true,
})


//Testing adding filters;


    
        
        
        
    
    
























