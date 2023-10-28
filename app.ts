interface SettingsPay {
   price: number,
   discount: number,
   isInstallment: boolean,
   months: number
}
const totalPrice = (obj: SettingsPay): number => {
   const percent: number = 100
   const priceSale: number = (100 - obj?.discount) * obj?.price / percent
   const everyMonthPay: number = priceSale / obj.months
   return everyMonthPay
};

const pay: SettingsPay = { price: 100000, discount: 25, isInstallment: true, months: 12 }
if(pay.isInstallment) {
   console.log(totalPrice(pay));
}
