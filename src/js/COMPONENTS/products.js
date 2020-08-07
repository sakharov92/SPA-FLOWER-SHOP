
import { DATA } from './Data.min.js';
import { PRODUCTS_BLOCK_FEATURED_PRODUCTS } from './root.js';
import { PRODUCTS_BLOCK_ARRIVALS_PRODUCTS } from './root.js';
import { PRODUCTS_BLOCK_POPULAR_PRODUCTS } from './root.js';
class Products {

    render() {
        let htmlCatalogItems = "";
        DATA.forEach(({ id, name, img, price }) => {
            htmlCatalogItems += `
            <li>
              <span class='name'>${name}</span>
              <img src="${img}"/>
              <div class="priceBlock">
                    <span>${price}$</span>
                    <button>Order Now</button>
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
        PRODUCTS_BLOCK_FEATURED_PRODUCTS.innerHTML = list;
        PRODUCTS_BLOCK_ARRIVALS_PRODUCTS.innerHTML = list;
        PRODUCTS_BLOCK_POPULAR_PRODUCTS.innerHTML = list;
    }
}

export const productsList = new Products;

