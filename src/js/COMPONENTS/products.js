
import { DATA } from './Data.min.js';
import { PRODUCTS_BLOCK_FEATURED_PRODUCTS } from './root.js';
import { PRODUCTS_BLOCK_ARRIVALS_PRODUCTS } from './root.js';
import { PRODUCTS_BLOCK_POPULAR_PRODUCTS } from './root.js';
import { localStorageCart } from './localStorage.js'

class Products {
    render() {
        const currentProducts = localStorageCart.getProducts();
        let htmlCatalogItems = "";
        DATA.forEach(({ id, name, img, price }) => {
            let activeClass = 'notActive';
            let buttonText = '';
            if (currentProducts.indexOf(id) === -1) {
                buttonText = "Add to cart"
            } else {
                buttonText = "Remove";
                activeClass = "active";
            }
            htmlCatalogItems += `
            <li>
              <span class='name'>${name}</span>
              <img src="${img}"/>
              <div class="priceBlock">
                    <span>${price}$</span>
                    <button class="order ${activeClass}" data-id=${id}>${buttonText}
                    </button>
              </div>
            </li>
            `
        });
        let list = `
        <div class='container'>
        <ul>
            ${htmlCatalogItems}
        </ul>
        </div>
        `;

        //Each part of "products" components should be realised separately in different classes,
        //because of different groups of products. But here is 3 group were combined and rendered together to save a time, because it was just a sample.
        PRODUCTS_BLOCK_FEATURED_PRODUCTS.innerHTML = list;
        PRODUCTS_BLOCK_ARRIVALS_PRODUCTS.innerHTML = list;
        PRODUCTS_BLOCK_POPULAR_PRODUCTS.innerHTML = list;
    }
}

export const productsList = new Products;


