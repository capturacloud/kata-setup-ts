import {VoucherCodes} from "@/VoucherCodes";

export class Voucher {
    code: string;
    discount: number;

    constructor(code: string, discount: number) {
        this.code = code;
        this.discount = discount;
    }

    static fromCode(codeName: keyof typeof VoucherCodes): Voucher {
        const discountValue = VoucherCodes[codeName];

        return new Voucher(codeName, discountValue);
    }
}