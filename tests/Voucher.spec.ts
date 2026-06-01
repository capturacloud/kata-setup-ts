import {Voucher} from "@/Voucher";

it('should create a PROMO_5 voucher with 5 as discount', () => {
    const voucher = Voucher.fromCode('PROMO_5')

    expect(voucher.code).toBe('PROMO_5')
    expect(voucher.discount).toBe(5)
});

it('should create a PROMO_10 voucher with 10 as discount', () => {
    const voucher = Voucher.fromCode('PROMO_10')

    expect(voucher.code).toBe('PROMO_10')
    expect(voucher.discount).toBe(10)
});