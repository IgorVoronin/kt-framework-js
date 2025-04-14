import type { ReactNode } from 'react';
import { Box, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';

import { API } from '@/shared/api';
import { calculateDiscount } from '@/shared/lib';

interface ProductCardProps {
    image?: string;
    title?: string;
    price?: number;
    description?: string;
    discont_price?: number | null;
    addToCartSlot?: ReactNode;
}

export const ProductCard = ({ image, title, discont_price, price, description, addToCartSlot }: ProductCardProps) => {
    // Добавляем базовый URL API к пути изображения
    const fullImageSrc = image ? `${API.BASE_URL}${image}` : undefined;

    return (
        <Box>
            <Flex gap={32}>
                <Image radius='lg' maw={780} mah={572} w='100%' h='100%' src={fullImageSrc} alt={title} />
                <Stack>
                    <Title fz={40} mb={32} lh={1}>
                        {title}
                    </Title>
                    <Group gap={32} align='baseline'>
                        <Text lh={1} fz={64} fw='bold'>
                            ${discont_price ?? price}
                        </Text>
                        <Box hidden={!discont_price} pos='relative'>
                            <Text
                                pos='absolute'
                                top={-24}
                                right={-64}
                                bg='green'
                                c='white'
                                py={4}
                                px={8}
                                style={{ borderRadius: 6 }}
                                fw={600}
                                fz={20}
                                lh='26px'
                            >
                                -{calculateDiscount({ price: price ?? 0, discountPrice: discont_price ?? 0 })}%
                            </Text>
                            <Text fz={40} lh={1} td='line-through' c='gray' hidden={!discont_price}>
                                ${price}
                            </Text>
                        </Box>
                    </Group>

                    {addToCartSlot}

                    <Text fw='bold'>Description</Text>
                    <Text>{description}</Text>
                </Stack>
            </Flex>
        </Box>
    );
};
