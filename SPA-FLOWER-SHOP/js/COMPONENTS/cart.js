import { BODY } from "./root.js"
import { localStorageCart } from "./localStorage.js"
import { DATA } from "./Data.js"
class Cart {
    render() {
        let list = '';

        localStorageCart.getProducts().forEach(element => {
            list += `
            <li>${localStorageCart.getProducts().indexOf(element) + 1}. </li>
            `
        });

        let ul = `
        <ul>
        ${list}
        </ul>`

        const html = `
        <div class='openCart'>
            <div class='head'><span>Your Cart</span><i class="fas fa-times closeCart"></i></div>
            ${ul}
            
            <span class=sum>0.00$</span>
            <button class=cartOrder>Order</button>
        </div>
        `
        BODY.innerHTML += html;
    }
}
export const cart = new Cart();