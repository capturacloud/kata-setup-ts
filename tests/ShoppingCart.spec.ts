import { ShoppingCart } from '@/ShoppingCart'

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
`);
});

