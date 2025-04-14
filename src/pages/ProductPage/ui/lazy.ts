import { lazy } from 'react';

// Используем обычный импорт без динамического пути
export const ProductPageLazy = lazy(() => import('./ProductDetails'));
