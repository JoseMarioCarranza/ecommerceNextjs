import React from 'react'
import Head from 'next/head'
import {
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Layout = ({ children }) => {

    //useColor Mode es un hook de chakra ui, proporciona a la aplicación la funcionalidad
    //de cambiar entre modo claro y oscuro
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div>
            <Head><title> E-commerce App </title></Head>

            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.600')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderTop={1}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                >
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Text
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}>Logo
                        </Text>
                    </Flex>
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                    >

                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            variant={'link'}
                            href={'#'}
                            bg={'pink.400'}
                            _hover={{ bg: 'pink.300' }}
                        > Sign In </Button>
                        <Button> Sign Up </Button>
                    </Stack>
                </Flex>
            </Box>
            {children}
        </div>
    )
}

export default Layout