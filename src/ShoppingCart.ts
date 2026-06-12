import {ProductItem} from "@/ProductItem";
import {Voucher} from "@/Voucher";
import {CartList} from "@/CartList";

export class ShoppingCart {
    TEMPLATE : string = `
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
  productsList : CartList = new CartList();
  voucher : Voucher = new Voucher("", 0);

  print (): string {
    if (this.productsList.productList.length === 0) {
      return this.TEMPLATE;
    }

    let productString: string = ''
    let totalProducts: number = 0;
    let promoString = ('').padEnd(29);

    if (this.voucher.discount === 5) {
        promoString = ('5% descontado (PROMO_5)').padEnd(29);
    }
    if (this.voucher.discount === 10) {
        promoString = ('10% descontado (PROMO_10)').padEnd(29);
    }

    for (const productItem of this.productsList.productList) {

      totalProducts += productItem.quantity;

      const paddedName = productItem.product.name.padEnd(12, ' ');
      const paddedPrice = `${(productItem.product.price * productItem.quantity).toFixed(2)}€`.padEnd(14, ' ');
      const paddedQuantity = productItem.quantity.toString().padStart(8, ' ');

        productString += ` | ${paddedName} | ${paddedPrice} | ${paddedQuantity} |\n`;
    }


      const paddedTotalProducts = totalProducts.toString().padEnd(20, ' ');
      const paddedTotalPrice = `${(this.productsList.calculateTotalPrice() * (0.01 * (100 - this.voucher.discount))).toFixed(2)} €`.padEnd(26);
      return `
 --------------------------------------------
 | Producto     | Precio con IVA | Cantidad |
${productString} |------------------------------------------|
 | Promoción: ${promoString} |
 -------------------------------------------|
 | Total de productos: ${paddedTotalProducts} |
 | Precio total: ${paddedTotalPrice} |
 --------------------------------------------
`}

  add(...product: ProductItem[]) {
    this.productsList.add(...product);
  }

  applyDiscount(voucher: Voucher) {
    this.voucher = voucher;
  }
}