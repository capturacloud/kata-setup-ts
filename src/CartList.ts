import {ProductItem} from "@/ProductItem";

export class CartList{
    productList: ProductItem[] = [];
    totalPrice: number = 0;

    calculateTotalPrice(): number{
        for (const product of this.productList){
            this.totalPrice += product.quantity * product.product.price
        }
        return this.totalPrice;
    }

    totalProducts(): number {
        let quantity = 0;

        for (const product of this.productList){
             quantity += product.quantity
        }
        return quantity;
    }

    add(...product: ProductItem[]): void{
        this.productList.push(...product)
    }
}


