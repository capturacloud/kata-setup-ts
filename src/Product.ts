import {productData, ProductList} from "@/ProductList";

export class Product {
    name: string;
    price: number;
    tax: number;
    benefit: number;
    finalPrice: number;

    constructor(name: string, price: number, tax: number, benefit: number) {
        this.name = name;
        this.price = price;
        this.tax = tax;
        this.benefit = benefit;
        this.finalPrice = price * ((tax / 100) + 100);
    }

    static fromString(name: keyof typeof ProductList): Product {

        const productName = ProductList[name];
        const data = productData[productName];
        const price = data[0];
        const tax = data[1];
        const benefit = data[2];

        return new Product(productName, price, tax, benefit);
    }
}