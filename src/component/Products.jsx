import React from 'react'
import { ProductList } from './ProductList'
import { Container, Box, Input, Stack } from '@chakra-ui/react'
import { Search2Icon, AddIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'


export const Products = () => {
  return <>

    <Container paddingTop={"20px"}
      width={"70%"}
      margin={"auto"}
      bg={"#f5eeed"}
      borderRadius={"10px"}
      marginTop={"20px"}
    >
      <Box display={"flex"}
        width={"100%"}

        justifyContent={"space-between"}
      >
        <Box width={"100%"}
        >
          <Input placeholder='Search..' width={"70%"} border={"1px solid black"} borderRadius={"10px"} padding={"5px"}/>
        <Search2Icon/>

        </Box>
        <Box width={"100%"} >
          <Button width={"20%"} fontSize={"16"} color={"#498768"} borderRadius={"30px"} border={" 1px solid #498768"}><AddIcon /> Add Item </Button>
        </Box>
      </Box>
      <Box marginTop={"10"}>
      <ProductList />
      </Box>
    


    </Container>

  </>


}
