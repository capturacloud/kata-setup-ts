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
}