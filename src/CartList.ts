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
        return 0;
    }

    add(...product: ProductItem[]): void{
        this.productList.push(...product)
    }
}


