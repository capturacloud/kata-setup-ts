
import {CartList} from "@/CartList";
import {Product} from "@/Product";
import {ProductItem} from "@/ProductItem";

it('calculateTotalPrice should return 10 when two items of total price 10 added', () => {
    const cart = new CartList();
    const booster = new Product('TMNT Booster', 5.00, 21, 15)
    const boosterItem = new ProductItem(2, booster)
    cart.add(boosterItem)

    expect(cart.calculateTotalPrice()).toBe(10)
});