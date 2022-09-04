

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
import {dataDB} from "./JS/data.js";


const containerArticule = document.querySelector(".product-list-container");

let html = "";



/*
dataDB.forEach((articule) => {
    html += `<div class="articule">
    <div class="articule-img">
        <img src="#" alt="">
    </div>
    <div class="articule-body">
        <h2 class="articule-body-title"></h2>
        <p>Price</p>
        <p>Stock</p>
        <button class="btn btn-add">Add to Cart</button>
    </div>
    </div>`
});*/


console.log(dataDB); 