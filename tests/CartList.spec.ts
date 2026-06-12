
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

it('calculateTotalPrice should return 11 when three items of total price 11 added', () => {
    const cart = new CartList();
    const booster = new Product('TMNT Booster', 5.00, 21, 15)
    const sleeve = new Product('Sleeves', 1.00, 14, 12)
    const boosterItem = new ProductItem(2, booster)
    const sleeveItem = new ProductItem(1, sleeve)
    cart.add(boosterItem)
    cart.add(sleeveItem)

    expect(cart.calculateTotalPrice()).toBe(11)
});

it('calculateTotalPrice should return 12 when four items of total price 12 added', () => {
    const cart = new CartList();
    const booster = new Product('TMNT Booster', 5.00, 21, 15)
    const sleeve = new Product('Sleeves', 1.00, 14, 12)
    const boosterItem = new ProductItem(2, booster)
    const sleeveItem = new ProductItem(2, sleeve)
    cart.add(boosterItem)
    cart.add(sleeveItem)

    expect(cart.calculateTotalPrice()).toBe(12)
});

it('totalProducts should return zero when no products added', () => {
    const cart = new CartList();

    expect(cart.totalProducts()).toBe(0)
});

it('totalProducts should return one when one product added', () => {
    const cart = new CartList();
    const booster = Product.fromString('TMNTBooster')
    const boosterItem = new ProductItem(1, booster)
    cart.add(boosterItem)

    expect(cart.totalProducts()).toBe(1)
});

it('totalProducts should return two when two differents products added', () => {
    const cart = new CartList();
    const booster = Product.fromString('TMNTBooster')
    const deckbox = Product.fromString('DeckBox')
    const boosterItem = new ProductItem(1, booster)
    const deckboxItem = new ProductItem(1, deckbox)
    cart.add(boosterItem, deckboxItem)

    expect(cart.totalProducts()).toBe(2)
});