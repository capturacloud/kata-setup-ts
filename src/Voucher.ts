export class Voucher {
    code: string;
    discount: number;

    constructor(code: string, discount: number) {
        this.code = code;
        this.discount = discount;
    }
}