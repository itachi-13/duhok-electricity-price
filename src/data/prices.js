export const _2018 = [
    { month: "01-2018", price: 13000 },
    { month: "02-2018", price: 12500 },
    { month: "03-2018", price: 12000 },
    { month: "04-2018", price: 9000 },
    { month: "05-2018", price: 8000 },
    { month: "06-2018", price: 12000 },
    { month: "07-2018", price: 14000 },
    { month: "08-2018", price: 14500 },
    { month: "09-2018", price: 14250 },
    { month: "10-2018", price: 10000 },
    { month: "11-2018", price: 12250 },
    { month: "12-2018", price: 16500 },
];

export const _2019 = [
    { month: "01-2019", price: 14500 },
    { month: "02-2019", price: 15000 },
    { month: "03-2019", price: 12750 },
    { month: "04-2019", price: 9500 },
    { month: "05-2019", price: 8500 },
    { month: "06-2019", price: 11500 },
    { month: "07-2019", price: 15500 },
    { month: "08-2019", price: 16000 },
    { month: "09-2019", price: 14250 },
    { month: "10-2019", price: 10250 },
    { month: "11-2019", price: 13000 },
    { month: "12-2019", price: 18500 },
];

export const _2020 = [
    { month: "01-2020", price: 15000 },
    { month: "02-2020", price: 16000 },
    { month: "03-2020", price: 14000 },
    { month: "04-2020", price: 10000 },
    { month: "05-2020", price: 9000 },
    { month: "06-2020", price: 12500 },
    { month: "07-2020", price: 17000 },
    { month: "08-2020", price: 18000 },
    { month: "09-2020", price: 15000 },
    { month: "10-2020", price: 12000 },
    { month: "11-2020", price: 13500 },
    { month: "12-2020", price: 20000 },
];

export const _2021 = [
    { month: "01-2021", price: 15500 },
    { month: "02-2021", price: 16500 },
    { month: "03-2021", price: 13500 },
    { month: "04-2021", price: 9500 },
    { month: "05-2021", price: 8500 },
    { month: "06-2021", price: 13000 },
    { month: "07-2021", price: 17500 },
    { month: "08-2021", price: 18500 },
    { month: "09-2021", price: 14750 },
    { month: "10-2021", price: 12500 },
    { month: "11-2021", price: 14000 },
    { month: "12-2021", price: 21000 },
];

export const _2022 = [
    { month: "01-2022", price: 16000 },
    { month: "02-2022", price: 17000 },
    { month: "03-2022", price: 14500 },
    { month: "04-2022", price: 11000 },
    { month: "05-2022", price: 9500 },
    { month: "06-2022", price: 13500 },
    { month: "07-2022", price: 18000 },
    { month: "08-2022", price: 19000 },
    { month: "09-2022", price: 15250 },
    { month: "10-2022", price: 13000 },
    { month: "11-2022", price: 15000 },
    { month: "12-2022", price: 22000 },
];

export const _2023 = [
    { month: "01-2023", price: 16500 },
    { month: "02-2023", price: 17500 },
    { month: "03-2023", price: 15000 },
    { month: "04-2023", price: 11500 },
    { month: "05-2023", price: 10000 },
    { month: "06-2023", price: 14000 },
    { month: "07-2023", price: 18500 },
    { month: "08-2023", price: 19500 },
    { month: "09-2023", price: 15750 },
    { month: "10-2023", price: 13500 },
    { month: "11-2023", price: 16000 },
    { month: "12-2023", price: 21500 },
];

export const _2024 = [
    { month: "01-2024", price: 20000 },
    { month: "02-2024", price: 18250 },
    { month: "03-2024", price: 15500 },
    { month: "04-2024", price: 12500 },
    { month: "05-2024", price: 11750 },
    { month: "06-2024", price: 15250 },
    { month: "07-2024", price: 17500 },
    { month: "08-2024", price: 16500 },
    { month: "09-2024", price: 13500 },
    { month: "10-2024", price: 9750 },
    { month: "11-2024", price: 12500 },
    { month: "12-2024", price: 20250 },
];

/** Total price of each year for 1 ampere */
const totalPrice2018 = _2018.reduce((total, item) => total + item.price, 0);
const totalPrice2019 = _2019.reduce((total, item) => total + item.price, 0);
const totalPrice2020 = _2020.reduce((total, item) => total + item.price, 0);
const totalPrice2021 = _2021.reduce((total, item) => total + item.price, 0);
const totalPrice2022 = _2022.reduce((total, item) => total + item.price, 0);
const totalPrice2023 = _2023.reduce((total, item) => total + item.price, 0);
const totalPrice2024 = _2024.reduce((total, item) => total + item.price, 0);

export const tableData = [
    { year: "2018", total_price: totalPrice2018 },
    { year: "2019", total_price: totalPrice2019 },
    { year: "2020", total_price: totalPrice2020 },
    { year: "2021", total_price: totalPrice2021 },
    { year: "2022", total_price: totalPrice2022 },
    { year: "2023", total_price: totalPrice2023 },
    { year: "2024", total_price: totalPrice2024 },
];
