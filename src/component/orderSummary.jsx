import { Container, Box, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons'

export const OrderSummary = () => {
    return (
        <Container
            padding={"15px"}
            bg={"#f5eeed"}
            boxShadow={"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"}
        >

            <Box display={"flex"}
            paddingLeft={"60px"} >
                <Heading>Orders</Heading>  <ChevronRightIcon paddingTop={"1px"} fontSize={"30px"} />  <Text textDecoration={"underline"}>Order 32457ABC</Text>
            </Box>


            <Box
                paddingTop={"14px"}
                display={"flex"}
                justifyContent={"space-between"}
            >
                <Box paddingLeft={"60px"}>
                    <Heading fontSize={"22px"} textAlign={"left"}>Order 32457ABC</Heading>
                </Box>
                <Box display={"flex"}
                    justifyContent={"space-evenly"}
                    width={"40%"}>
                    <Button width={"20%"} color={"#498768"} borderRadius={"30px"} border={" 1px solid #498768"}>Back</Button>
                    <Button width={"30%"} borderRadius={"30px"} color={"white"} bg={"#498768"}>Approve Order</Button>
                </Box>

            </Box>
        </Container>
    )
}
