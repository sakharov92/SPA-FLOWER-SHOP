import { BODY } from "./root.js"
import { localStorageCart } from "./localStorage.js"
class Cart {
    render() {
        const html = `
        <div class='openCart'>
            <div class='head'><span>Your Cart</span><i class="fas fa-times closeCart"></i></div>
            
        </div>
        `
        BODY.innerHTML += html;
    }
}
export const cart = new Cart();