import {Product} from "@/Product";
import {ProductItem} from "@/ProductItem";

export class ShoppingCart {
  added: boolean = false;
  numberAdded: number = 0;

  print (): string {
    if (this.numberAdded > 1) {
      return `
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
`
    }
    if (this.added) {
      return `
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
 | TMNT Booster | 5.00€          |        1 |
 |------------------------------------------|
 | Promoción:                               |
 --------------------------------------------
 | Total de productos: 1                    |
 | Precio total: 5.00 €                     |
 --------------------------------------------
`
    }
    return `
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
 | -----------  | -------------- | -------- |
 |------------------------------------------|
 | Promoción:                               |
 --------------------------------------------
 | Total de productos: 0                    |
 | Precio total: 0.00 €                     |
 --------------------------------------------
`;
  }

  add(product: ProductItem) {
    this.added = true;
    this.numberAdded += 1;
  }
}