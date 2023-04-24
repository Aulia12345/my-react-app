import { v4 as uuid } from 'uuid';

export const staticProductData = [
    {
        key: uuid(),
        productName: 'John',
        productCategory: 'Brown',
        imageProduct: '/img/bs-logo.png',
        productFreshness: 'blabla',
        productPrice: 500
    }
];

export const generateProductKey = () => {
    return uuid();
};
