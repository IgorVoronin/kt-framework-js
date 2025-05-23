import { Link } from 'react-router';
import { Button, Image, Stack, Text } from '@mantine/core';

import { API } from '@/shared/api';

interface CategoryCardProps {
    imageSrc?: string;
    category?: string;
    id?: number;
}

export const CategoryCard = ({ category, imageSrc, id }: CategoryCardProps) => {
    // Добавляем базовый URL API к пути изображения
    const fullImageSrc = imageSrc ? `${API.BASE_URL}${imageSrc}` : undefined;

    return (
        <Button px={0} h='100%' component={Link} to={`/categories/${id}`} variant='transparent'>
            <Stack h='100%' c='black'>
                <Image flex={1} fit='cover' radius='lg' maw={316} mih={350} src={fullImageSrc} alt={category} />
                <Text fz={20} ta='center'>
                    {category}
                </Text>
            </Stack>
        </Button>
    );
};
