import {ProductItem} from "@/ProductItem";
import {Voucher} from "@/Voucher";
import {CartList} from "@/CartList";

export class ShoppingCart {
  added : boolean = false;
  discount5 : boolean = false;
  discount10 : boolean = false;
  productsList : CartList = new CartList();

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

    let productString: string = ''
    let totalPrice: number = 0;
    let totalProducts: number = 0;
    let discount = 0;
    let promoString = ('').padEnd(29);

    if (this.discount5) {
        discount = 5;
        promoString = ('5% descontado (PROMO_5)').padEnd(29);
    }
    if (this.discount10) {
        discount = 10;
        promoString = ('10% descontado (PROMO_10)').padEnd(29);
    }

    for (const productItem of this.productsList.productList) {
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
      const paddedTotalPrice = `${(totalPrice * (0.01 * (100 - discount))).toFixed(2)} €`.padEnd(26);
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
    this.added = true;
    this.productsList.productList.push(...product);
  }

  applyDiscount(voucher: Voucher) {
    if (voucher.discount === 5) {
        this.discount5 = true;
    }

    if (voucher.discount === 10) {
          this.discount10 = true;
    }
  }
}