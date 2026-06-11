import {Product} from "@/Product";
import {ProductList} from "@/ProductList";

export class ProductItem {
    quantity: number;
    product: Product;

    constructor(quantity: number, product: Product) {
        this.quantity = quantity;
        this.product = product;
    }
}