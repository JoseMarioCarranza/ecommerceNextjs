import React from 'react'
import { data } from '../utils/data'
import { Image, Grid, GridItem, Card, Box } from '@chakra-ui/react'
import Link from 'next/link'

const Products = () => {
    return (
        <div>
            <Grid templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }} gap={6}>
                {data.products.map((product) => (
                    <GridItem key={product.id}>
                        <Card>
                            <Link href={`/product/${product.id}`}>
                                <Image
                                    src={`/images${product.image}`}
                                    height={230}
                                    width={230}
                                    style={{ objectFit: "cover", height: "230px" }}
                                    alt={product.title}
                                />
                                <Box py={1} px={3}>
                                    <h2>{product.title}</h2>
                                    <div>{product.description}</div>
                                    <div>${product.price}</div>
                                </Box>
                            </Link>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </div>
    )
}

export default Products;
