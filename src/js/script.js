import { productsList } from './COMPONENTS/products.js';
import { localStorageCart } from './COMPONENTS/localStorage.js'
import { cart } from './COMPONENTS/cart.js'


productsList.render();
cart.render();

//burger_button transformation
const menuList = document.querySelector("ul.burgerMenu");
const btn = document.querySelector(".burger-menu"); addEventListener('click', (e) => {
    if (e.target.closest("div.burger-menu")) {
        btn.classList.contains("active") ? (btn.classList.remove("active"), menuList.classList.remove("active")) : (btn.classList.add("active"), menuList.classList.add("active"));

    }
})

const cartItem = document.querySelector(".cart__text");
const closeCartBtn = document.querySelector(".closeCart");
cartItem.innerHTML = `Cart (${localStorageCart.getProducts().length})`;
cartItem.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', closeCart);



function closeCart() {
    document.querySelector(".openCart").classList.remove("show")
}
function showCart() {
    document.querySelector(".openCart").classList.add("show")
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