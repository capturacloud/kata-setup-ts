import {ProductList} from "@/ProductList";

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
        if (name === "TMNTBooster") {
            return new Product('TMNT Booster', 5.00, 21, 15);
        }
        return new Product('Sleeves', 1.00, 14, 12);
    }
}