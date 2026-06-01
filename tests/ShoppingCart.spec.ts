import { ShoppingCart } from '@/ShoppingCart'
import {Product} from "@/Product";
import {ProductItem} from "@/ProductItem";

it('print should print an empty cart when no items are added', () => {
  const cart = new ShoppingCart();

  expect(cart.print()).toBe(`
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
 | -----------  | -------------- | -------- |
 |------------------------------------------|
 | Promoción:                               |
 --------------------------------------------
 | Total de productos: 0                    |
 | Precio total: 0.00 €                     |
 --------------------------------------------
`)
});

it('print should print a cart with one booster when a booster is added', () => {
  const cart = new ShoppingCart()
  const booster = new Product('TMNT Booster', 5.00, 21, 15)
  const boosterItem = new ProductItem(1, booster)
  cart.add(boosterItem)

  expect(cart.print()).toBe(`
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
 | TMNT Booster | 5.00€          |        1 |
 |------------------------------------------|
 | Promoción:                               |
 --------------------------------------------
 | Total de productos: 1                    |
 | Precio total: 5.00 €                     |
 --------------------------------------------
`)
});
  it('print should print a cart with one booster and one sleeve when a booster and a sleeve is added', () => {
    const cart = new ShoppingCart()
    const booster = new Product('TMNT Booster', 5.00, 21, 15)
    const sleeve = new Product('UltraPRO Penny Sleeves', 1.00, 14, 12)
    const boosterItem = new ProductItem(1, booster)
    const sleeveItem = new ProductItem(1, sleeve)
    cart.add(boosterItem)
    cart.add(sleeveItem)

    expect(cart.print()).toBe(`
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
 | TMNT Booster | 5.00€          |        1 | 
 | Penny Sleeves| 1.00€          |        1 |
 |------------------------------------------|
 | Promoción:                               |
 --------------------------------------------
 | Total de productos: 2                    |
 | Precio total: 6.00 €                     |
 --------------------------------------------
`)
});
