export const API = {
    BASE_URL: 'https://framework-backend-ea0y.onrender.com',
    SALE_SEND: '/sale/send',
    ALL_CATEGORIES: '/categories/all',
    CATEGORY_BY_ID: (id: number) => `/categories/${id}`,
    ALL_PRODUCTS: '/products/all',
    PRODUCT_BY_ID: (id: number) => `/products/${id}`,
};
