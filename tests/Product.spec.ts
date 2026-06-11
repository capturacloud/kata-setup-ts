import {Product} from "@/Product";

it('should create a Sleeves product with method fromString', () => {
    const product = Product.fromString('Sleeves');

    expect(product.name).toBe('Sleeves')
    expect(product.price).toBe(1.00)
    expect(product.tax).toBe(14)
    expect(product.benefit).toBe(12)
});