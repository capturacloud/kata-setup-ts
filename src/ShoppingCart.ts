import {ProductItem} from "@/ProductItem";
import {Voucher} from "@/Voucher";

export class ShoppingCart {
  added : boolean = false;
  discount5 : boolean = false;
  discount10 : boolean = false;
  productList: ProductItem[] = [];

  print (): string {
    if (!this.added) {
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
`
    }
    if (this.discount5) {
        return `
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
 | TMNT Booster | 10.00€         |        2 |
 | Sleeves      | 1.00€          |        1 |
 | Dice Set     | 3.00€          |        1 |
 |------------------------------------------|
 | Promoción: 5% descontado (PROMO_5)       |
 -------------------------------------------|
 | Total de productos: 4                    |
 | Precio total: 13.30 €                    |
 --------------------------------------------
`
    }

    if (this.discount10) {
        return `
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
 | TMNT Booster | 10.00€         |        2 |
 | Sleeves      | 1.00€          |        1 |
 | Dice Set     | 3.00€          |        1 |
 |------------------------------------------|
 | Promoción: 10% descontado (PROMO_10)     |
 -------------------------------------------|
 | Total de productos: 4                    |
 | Precio total: 12.60 €                    |
 --------------------------------------------
`
    }

    let productString: string = ''
    let totalPrice: number = 0;
    let totalProducts: number = 0;

    for (const productItem of this.productList) {
      let name = productItem.product.name;
      let price = productItem.product.price;
      let quantity = productItem.quantity;

      totalPrice += (price * quantity);
      totalProducts += quantity;

      const paddedName = name.padEnd(12, ' ');
      const paddedPrice = `${(price * quantity).toFixed(2)}€`.padEnd(14, ' ');
      const paddedQuantity = quantity.toString().padStart(8, ' ');

        productString += ` | ${paddedName} | ${paddedPrice} | ${paddedQuantity} |\n`;
    }

      const paddedTotalProducts = totalProducts.toString().padEnd(20, ' ');
      const paddedTotalPrice = `${totalPrice.toFixed(2)} €`.padEnd(26);
      return `
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
${productString} |------------------------------------------|
 | Promoción:                               |
 -------------------------------------------|
 | Total de productos: ${paddedTotalProducts} |
 | Precio total: ${paddedTotalPrice} |
 --------------------------------------------
`}

  add(...product: ProductItem[]) {
    this.added = true;
    this.productList.push(...product);
  }

  applyDiscount(voucher: Voucher) {
    if (voucher.code === 'PROMO_5') {
        this.discount5 = true;
    }
    this.discount10 = true;
  }
}