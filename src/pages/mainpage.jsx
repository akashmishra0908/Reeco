import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { NavBar } from '../component/NavBar'
import { OrderSummary } from '../component/orderSummary'
import { Orders } from './Orders'

export const Mainpage = () => {
  return (
    <Container>
        <NavBar />
        <OrderSummary/>
        <Orders/>
    </Container>
  )
}
