'use client';
import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartContext } from '../context/CartProvider';
import CartButton from '../components/CartButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-2xl font-bold mb-4">
          Your shopping cart is empty.
        </h1>
        <ShoppingCartIcon sx={{ fontSize: 48, color: 'gray' }} />
        <p className="text-gray-600">
          Start adding items to your cart to see them here.
        </p>
      </div>
    );
  }

  const handleUpdateQuantity = (itemID, quantity) => {
    if (quantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemID));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === itemID) {
            return { ...item, quantity };
          }
          return item;
        })
      );
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const subtotal = calculateSubtotal();
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <TableContainer component={Paper} className="rounded-lg shadow">
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow>
              <TableCell className="font-bold px-6 py-3">Item</TableCell>
              <TableCell className="font-bold px-6 py-3">Quantity</TableCell>
              <TableCell className="font-bold px-6 py-3">Price</TableCell>
              <TableCell className="font-bold px-6 py-3">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="px-6 py-4">{item.name}</TableCell>
                <TableCell className="px-6 py-4">
                  <CartButton
                    itemId={item.id}
                    quantity={
                      cart.find((cartItem) => cartItem.id === item.id)?.quantity
                    }
                    onUpdateQuantity={(quantity) =>
                      handleUpdateQuantity(item.id, quantity)
                    }
                    stock={item.inStock}
                  />
                </TableCell>
                <TableCell className="px-6 py-4">
                  {formatPrice(item.price)}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {formatPrice(item.price * item.quantity)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-right font-bold px-6 py-3">
                Total:
              </TableCell>
              <TableCell className="font-bold px-6 py-3">
                {formatPrice(subtotal)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShoppingCart;
