"use strict";
const totalPrice = (obj) => {
    const percent = 100;
    const priceSale = (100 - (obj === null || obj === void 0 ? void 0 : obj.discount)) * (obj === null || obj === void 0 ? void 0 : obj.price) / percent;
    const everyMonthPay = priceSale / obj.months;
    return everyMonthPay;
};
const pay = { price: 100000, discount: 25, isInstallment: true, months: 12 };
if (pay.isInstallment) {
    console.log(totalPrice(pay));
}
