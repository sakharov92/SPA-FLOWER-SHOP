import { productsList } from './COMPONENTS/products.js';
import { localStorageCart } from './COMPONENTS/localStorage.js'
import { cart } from './COMPONENTS/cart.js'
import { DATA } from './COMPONENTS/Data.js'

productsList.render();
cart.render();


//burger_button transformation
const menuList = document.querySelector("ul.burgerMenu");
const btn = document.querySelector(".burger-menu"); addEventListener('click', (e) => {
    if (e.target.closest("div.burger-menu")) {
        btn.classList.contains("active") ? (btn.classList.remove("active"), menuList.classList.remove("active")) : (btn.classList.add("active"), menuList.classList.add("active"));

    }
})
//////////////////////////////////////////////////////////////////////////
const cartItem = document.querySelector(".cart__text");
cartItem.innerHTML = `Cart (${localStorageCart.getProducts().length})`;
cartItem.addEventListener('click', showCart);
let closeCartBtn = document.querySelector(".closeCart");
closeCartBtn.addEventListener('click', closeCart);


function closeCart() {
    document.querySelector(".openCart").classList.remove("show")

}
function showCart() {
    let cart = document.querySelector(".openCart")
    cart.classList.add("show");

    let ul = cart.querySelector("ul");
    ul.innerHTML = "";
    fillCart(ul);

}


function fillCart(ul) {
    let html = '';
    let sum = 0;
    localStorageCart.getProducts().forEach(e => {
        DATA.forEach(item => {
            if (item.id == e) {
                html += `
                <li>${localStorageCart.getProducts().indexOf(e) + 1}. ${item.name}: ${item.price}</li>
                `
                sum += +item.price;

            }
        })



    })
    document.querySelector("span.sum").innerHTML = sum + " $";
    ul.innerHTML = html;
}



//add eventlistener to item's buttons
const btns = document.querySelectorAll(".order");
btns.forEach((e) => {
    e.addEventListener("click", selectOrder);

})


//add order to the cart
function selectOrder() {
    const { pushProduct, products } = localStorageCart.putProducts(this.dataset.id);
    if (pushProduct) {
        this.classList.add("active");
        this.innerHTML = "Remove"
    } else {
        this.classList.remove("active");
        this.innerHTML = "Add to cart"
    }
    cartItem.innerHTML = `Cart (${localStorageCart.getProducts().length})`

}