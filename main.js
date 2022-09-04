

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
            <p>Price: ${price}</p>
            <p>Stock: ${Stock}</p>
            <button class="btn btn-add">Add to Cart</button>
        </div>
    </div>`

    
});

containerArticule.innerHTML = html;
