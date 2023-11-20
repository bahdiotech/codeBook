import React from 'react';
import {CartEmpty} from './components/CartEmpty'
import { CartList } from './components/CartList';
import {useCart}  from '../../context'
import { useTitle } from '../../hook';

export const CartPage = () => {
  const {cartList} = useCart()
  useTitle(`Cart (${CartList.length})`)

  return (
    <main>
      { !cartList.length ? <CartEmpty /> : <CartList/>}
    </main>
  )
}
