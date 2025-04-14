import { Box, Button, Container, Group, Image, Paper, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

import { API } from '@/shared/api';

export const FirstOrderForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            phone: '',
            email: '',
        },

        validate: {
            name: (value: string) => (value.length < 1 ? 'Required Field' : null),
            phone: (value: string) => (value.length < 1 ? 'Required Field' : null),
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = async (values: typeof form.values) => {
        try {
            const response = await fetch(`${API.BASE_URL}${API.SALE_SEND}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Box component='section' mb={80}>
            <Container>
                <Paper
                    radius='sm'
                    pt={32}
                    px={32}
                    style={{
                        background: 'linear-gradient(#0B710B, #339933)',
                    }}
                >
                    <Title fz={64} c='white' mb='xl' ta='center'>
                        5% off on the first order
                    </Title>
                    <Group gap={32}>
                        <Image maw={748} mah={360} src='https://igorvoronin.github.io/kt-framework-js/images/off_price_form_image@2x.webp' />
                        <form
                            style={{ flex: '1' }}
                            onSubmit={form.onSubmit(
                                handleSubmit,
                                (errors) => {
                                    console.log(errors);
                                }
                            )}
                        >
                            <Stack gap={16}>
                                <TextInput
                                    size='lg'
                                    placeholder='Name'
                                    key={form.key('name')}
                                    {...form.getInputProps('name')}
                                />
                                <TextInput
                                    size='lg'
                                    placeholder='Phone number'
                                    key={form.key('phone')}
                                    {...form.getInputProps('phone')}
                                />
                                <TextInput
                                    size='lg'
                                    placeholder='Email'
                                    key={form.key('email')}
                                    {...form.getInputProps('email')}
                                />
                                <Button
                                    type='submit'
                                    my={16}
                                    bg={isSubmitted ? 'gray.3' : 'white'}
                                    c={isSubmitted ? 'green' : 'black'}
                                    size='lg'
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? 'Discount Code Sent!' : 'Get a discount'}
                                </Button>
                            </Stack>
                        </form>
                    </Group>
                </Paper>
            </Container>
        </Box>
    );
};
