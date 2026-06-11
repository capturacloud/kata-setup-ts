import {Product} from "@/Product";

it('should create a Sleeves product with method fromString', () => {
    const product = Product.fromString('Sleeves');

    expect(product).toMatchObject(new Product('Sleeves', 1.00, 14, 12))
});

it('should create a TMNT Booster product with method fromString', () => {
    const product = Product.fromString('TMNTBooster');

    expect(product).toMatchObject(new Product('TMNT Booster', 5.00, 21, 15))
});

it('should create a Dice Set product with method fromString', () => {
    const product = Product.fromString('DiceSet');

    expect(product).toMatchObject(new Product('Dice Set', 3.00, 14, 12))
});