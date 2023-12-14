import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveProduct, getProducts, markMissing, openEditPopup } from "../redux/action"
import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

export function ProductList() {
  const dispatch = useDispatch();
  dispatch(getProducts());
  const products = useSelector(store => store.reecoReducer.products);

  const handleApprove = productId => {
    dispatch(approveProduct(productId));
  };

  const handleMarkMissing = (productId, urgent) => {
    dispatch(markMissing(productId, urgent));
  };

  const handleEdit = productId => {
    dispatch(openEditPopup(productId));
  };

  return (
    <Box padding={"20px"} width={"90%"}
    margin={"auto"}  >
    <Table variant="striped" colorScheme="gray" padding={"20px"}>
        <Thead >
          <Tr>
            <Th padding={10}>
              <Flex justifyContent="space-around" alignItems="center">
                Id
              </Flex>
            </Th>
            
            <Th padding={10}>
              <Flex justifyContent="space-around" alignItems="center">
                 Name
              </Flex>
            </Th>
            <Th padding={10}>
              <Flex justifyContent="space-around" alignItems="center">
                Price
              </Flex>
            </Th>
            <Th padding={10}>
              <Flex justifyContent="space-around" alignItems="center">
                Quantity
              </Flex>
            </Th>
            <Th padding={10}>
              <Flex justifyContent="space-around" alignItems="center">
                Total
              </Flex>
            </Th>
            <Th padding={10}>
              <Flex justifyContent="space-around" alignItems="center">
                Status
              </Flex>
            </Th>
            <Th padding={10}>
              <Flex justifyContent="space-around" alignItems="center">
                Actions
              </Flex>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {products?.map((el, index) => (
            <Tr key={index}  bg={index % 2 === 0 ? 'gray.100' : 'white'} borderRadius="md">
              <Td paddingLeft ={7} >{el.id}</Td>
              <Td>{el.name}</Td>
              <Td>{el.price}</Td>
              <Td>{el.quantity}</Td>
              <Td>
                <Flex justifyContent="space-around" alignItems="center">
                  {el.price * el.quantity}
                </Flex>
              </Td>
              <Td  style={{ backgroundColor: el.status === 'Approved' ? 'green' : el.status === 'Missing' ? 'red' : 'transparent' }} padding={10} width={"13%"}color={"white"}>{el.status}</Td>
              <Td padding="10px" width="50%">
                <Flex justifyContent="space-evenly" alignItems="center">
                  <Button
                    padding="10px"
                    border="1px solid #c9c9c9"
                    onClick={() => handleApprove(el.id)}
                  >
                    <CheckIcon />
                  </Button>
                  <Button
                    padding="10px"
                    border="1px solid #c9c9c9"
                    onClick={() => handleMarkMissing(el.id, false)}
                  >
                    <CloseIcon />
                  </Button>
                  <Button
                    padding="10px"
                    border="1px solid #c9c9c9"
                    onClick={() => handleEdit(el.id)}
                  >
                    Edit
                    <EditIcon marginLeft={"5px"}/> 
                  </Button>
                  
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
  </Box>
  );

}

