import {Product} from "@/Product";

export class ShoppingCart {
  added: boolean = false;
  print (): string {
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

  add(booster: Product) {
    this.added = true;
  }
}