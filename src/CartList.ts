import {ProductItem} from "@/ProductItem";

export class CartList{
    productList: ProductItem[] = [];
    totalPrice = 0;

    calculateTotalPrice():number{
        return 10;
    }

    add(product: ProductItem){
        this.productList.push(product)
    }
}


