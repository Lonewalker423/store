import React, { Component } from "react";
import { CartItem } from "./CartItem";
export const CartList = props => {
  // const { id, title, img, price, total, count } = item;
  const { cart } = props.value;
  console.log(cart);
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={props.value} />;
      })}
      ;
    </div>
  );
};
