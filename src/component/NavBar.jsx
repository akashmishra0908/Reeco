import { Container, Box, Heading } from '@chakra-ui/react'
import { Link, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'

export const NavBar = () => {
    return (
        <Container bg={"#498768"} h={"70px"}
            display={"flex"}
            justifyContent={"space-around"}
            color={"white"}
        >

            <Box
                display={"flex"}
                width={"30%"}
                justifyContent={"space-around"}
            >
                <Box
                    display={"flex"}
                    width={"30%"}
                    justifyContent={"space-around"}
                    padding={"8px"}
                >
                    <Heading size='lg' fontSize='32px'>
                        Reeco
                    </Heading>
                </Box>
                <Box
                    display={"flex"}
                    width={"80%"}
                    fontSize={"20px"}
                    padding={"20px"}
                    justifyContent={"space-around"}
                >

                    <Link cursor={"pointer"} >Store</Link>
                    <Link cursor={"pointer"}>Orders</Link>
                    <Link cursor={"pointer"}>Analytics</Link>
                </Box>
            </Box>

            <Box
                display={"flex"}
                width={"30%"}
                justifyContent={"space-around"}
                fontSize={"20px"}
                padding={"20px"}
            >
                <Text>Hello , James  <ChevronDownIcon cursor={"pointer"} /> </Text>


            </Box>
        </Container>
    )
}
