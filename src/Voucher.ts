import {VoucherCodes} from "@/VoucherCodes";

export class Voucher {
    code: string;
    discount: number;

    constructor(code: string, discount: number) {
        this.code = code;
        this.discount = discount;
    }

    static fromCode(codeName: keyof typeof VoucherCodes) : Voucher {

        return new Voucher('PROMO_5', 5);
    }
}