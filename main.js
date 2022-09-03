
//the burger

const Burger = document.querySelector("#Burger");
const Nav = document.querySelector("#nav-elements-grandpa");

Burger.addEventListener("click", function () {
    Nav.classList.toggle("nav-elements-grandpa-show");
});

//Slider

var counter = 1;
      setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
          counter = 1;
        }
      }, 3000);





// Adding to selected product from product list.
/*
function getToselected(e) {    
document.getElementById("selected-product").src = e.target.src;
}

function getToselected2() {    
    document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected3() {    
    document.getElementById("selected-product").src = document.getElementById("product3").src;
}

function getToselected4() {    
     document.getElementById("selected-product").src = document.getElementById("product4").src;
}

function getToselected5() {    
    document.getElementById("selected-product").src = document.getElementById("product5").src;
}

function getToselected6() {    
    document.getElementById("selected-product").src = document.getElementById("product6").src;
}

function getToselected7() {    
    document.getElementById("selected-product").src = document.getElementById("product7").src;
}

function getToselected8() {    
    document.getElementById("selected-product").src = document.getElementById("product8").src;
}

function getToselected9() {    
    document.getElementById("selected-product").src = document.getElementById("product9").src;
}

function getToselected10() {    
    document.getElementById("selected-product").src = document.getElementById("product10").src;
}

function getToselected11() {    
     document.getElementById("selected-product").src = document.getElementById("product11").src;
}

function getToselected12() {    
    document.getElementById("selected-product").src = document.getElementById("product12").src;
}

function getToselected13() {    
     document.getElementById("selected-product").src = document.getElementById("product13").src;
}

function getToselected14() {    
     document.getElementById("selected-product").src = document.getElementById("product14").src;
}

function getToselected15() {    
     document.getElementById("selected-product").src = document.getElementById("product15").src;
}

function getToselected16() {    
     document.getElementById("selected-product").src = document.getElementById("product16").src;
}

function getToselected17() {    
     document.getElementById("selected-product").src = document.getElementById("product17").src;
}

function getToselected18() {    
     document.getElementById("selected-product").src = document.getElementById("product18").src;
}

function getToselected19() {    
     document.getElementById("selected-product").src = document.getElementById("product19").src;
}

function getToselected20() {    
     document.getElementById("selected-product").src = document.getElementById("product20").src;
}

function getToselected21() {    
     document.getElementById("selected-product").src = document.getElementById("product21").src;
}

function getToselected22() {    
     document.getElementById("selected-product").src = document.getElementById("product22").src;
}

function getToselected23() {    
     document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected() {    
     document.getElementById("selected-product").src = document.getElementById("product1").src;
}

function getToselected2() {    
     document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
     document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
     document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
     document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product1").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product1").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}

function getToselected2() {    
    let pic = document.getElementById("selected-product").src = document.getElementById("product2").src;
}


//Customizing the filters, as an Idea feeling like using toggle and match them based on their ATL

function filters(filter) {
    if (products[i].atl === filter.alt) {
        
    }
}

*/