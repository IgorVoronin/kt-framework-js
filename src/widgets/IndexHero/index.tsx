import { Link } from 'react-router';
import { Box, Button } from '@mantine/core';

import { Hero } from '@/shared/ui';

export const IndexHero = () => {
    return (
        <Box component='section' mb={80}>
            <Hero src='https://igorvoronin.github.io/kt-framework-js/images/hero@2x.webp' title={'Amazing Discounts\non Garden Products!'}>
                <Button w='fit-content' size='xl' miw={218} component={Link} to='/sales'>
                    Check out
                </Button>
            </Hero>
        </Box>
    );
};
