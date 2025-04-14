import { Box, Container, Loader, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { AllProductsModel, ProductCard, fetchProductById } from '@/entities/Product';
import { AddProductToCart } from '@/features/AddProductToCart';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux.ts';
import { Contacts } from '@/widgets/Contacts';
import { RootLayout } from '@/widgets/RootLayout';

export default function ProductPage() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(AllProductsModel.selectors.selectCurrentProduct);
    const isLoading = useAppSelector((state) => state.allProducts.isProductLoading);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            try {
                dispatch(fetchProductById(Number(id)));
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Ошибка при загрузке товара. Пожалуйста, попробуйте позже.');
            }
        }
    }, [id, dispatch]);

    if (error) {
        return (
            <RootLayout title="Ошибка">
                <Container>
                    <Box component='section' mt={116} mb={80}>
                        <Text color="red" size="xl">{error}</Text>
                    </Box>
                </Container>
            </RootLayout>
        );
    }

    if (isLoading) {
        return (
            <RootLayout title="Загрузка...">
                <Container>
                    <Box component='section' mt={116} mb={80} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Loader size="xl" />
                    </Box>
                </Container>
            </RootLayout>
        );
    }

    if (!product) {
        return (
            <RootLayout title="Товар не найден">
                <Container>
                    <Box component='section' mt={116} mb={80}>
                        <Text size="xl">Товар не найден или произошла ошибка загрузки.</Text>
                    </Box>
                </Container>
            </RootLayout>
        );
    }

    return (
        <RootLayout title={`${product.title}`}>
            <Container>
                <Box component='section' mt={116} mb={80}>
                    <ProductCard {...product} addToCartSlot={<AddProductToCart product={product} />} />
                </Box>
                <Contacts />
            </Container>
        </RootLayout>
    );
} 