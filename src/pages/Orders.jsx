import { Container, VStack, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { Products } from '../component/Products'

export const Orders = () => {
  return (

    <Container>
      <Container width={"70%"}
        margin={"auto"} bg={"#f5eeed"}
        marginTop={"20px"}
        height={"auto"}
        display={"flex"}
        borderRadius={"10px"}
        justifyContent={"space-evenly"}
        padding={"10px"}
      fontWeight={"bold"}

      >
        <Box borderRight={"1px solid black"} padding={"5px"}>
          <Text textAlign={"left"}>supplier</Text>
          <Heading textAlign={"left"}>East coast fruits & vegitables</Heading>
        </Box>
        <Box borderRight={"1px solid black"} padding={"5px"}>
          <Text textAlign={"left"}>supplier</Text>
          <Heading textAlign={"left"}>East coast fruits & vegitables</Heading>
        </Box>
        <Box borderRight={"1px solid black"} padding={"5px"}>
          <Text textAlign={"left"}>supplier</Text>
          <Heading textAlign={"left"}>East coast fruits & vegitables</Heading>
        </Box>
        <Box borderRight={"1px solid black"} padding={"5px"}>
          <Text textAlign={"left"}>supplier</Text>
          <Heading textAlign={"left"}>East coast fruits & vegitables</Heading>
        </Box>
        <Box borderRight={"1px solid black"} padding={"5px"}>
          <Text textAlign={"left"}>supplier</Text>
          <Heading textAlign={"left"}>East coast fruits & vegitables</Heading>
        </Box>
        <Box padding={"5px"}>
          <Text textAlign={"left"}>supplier</Text>
          <Heading textAlign={"left"}>East coast fruits & vegitables</Heading>
        </Box>



      </Container>
      <Container ><Products /></Container>
    </Container>
  )
}
