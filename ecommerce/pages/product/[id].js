// Nombrar un archivo con el formato [id].js
// es una convención de nomenclatura que generalmente se utiliza para identificar
// de manera única un archivo en un proyecto
// 1.- Identificación única:
// El uso de un identificador único como lo es el id en el nombre del archivo ayuda
// que no haya conflictos con otros archivos en el mismo directorio o proyecto

import React from 'react'
import { useRouter } from 'next/router'
import { data } from '../../utils/data'
import {
    Container,
    SimpleGrid,
    Flex,
    Stack,
    Image,
    Heading,
    Box,
    Text,
    useColorModeValue,
    Button,
    flexbox
} from '@chakra-ui/react'

const ProductPage = () => {
    const router = useRouter() //hook de next
    const { id } = router.query

    const product = data.products.find((product) => product.id === parseInt(id))

    if (!product) {
        return <div> 404 | Product not Found</div>
    }

    return (
        <Container maxW={'container.xl'} mt={2}>
            <SimpleGrid column={[1, 2]} spacing={2}>

                <Flex>
                    <Image
                        src={`/images/${product.image}`}
                        fit={'cover'}
                        alt={product.title}
                        align={'center'}
                        h={'100%'}
                        w={{ base: '100%', sm: '400px', lg: '500px' }}
                        rounded={'md'}
                    />
                </Flex>

                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box>

                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '4xl' }}
                        >
                            {product.title}
                        </Heading>

                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={350}
                            fontSize={'2xl'}
                        >
                            {`$ ${product.price} USD`}
                        </Text>

                    </Box>
                    <Text
                        color={useColorModeValue('gray.900', 'gray.400')}
                        fontSize={'lg'}
                    >
                        {product.description}
                    </Text>
                    <Flex alignItems={'end'}>
                        <Button
                            rounded={'md'}
                            w={'full'}
                            mt={8}
                            size={'md'}
                            py={'7'}
                            bg={useColorModeValue('gray.900', 'gray.50')}
                            color={useColorModeValue('white', 'gray.200')}
                            textTransform={'uppercase'}
                            _hover={{ bg: 'green.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >Add to cart</Button>
                    </Flex>
                </Stack>

            </SimpleGrid>
        </Container >
    )
}

export default ProductPage