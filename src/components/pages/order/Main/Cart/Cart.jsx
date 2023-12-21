import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import CartProducts from "./CartProducts";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";

export default function Cart() {
  const { cart } = useContext(AdminContext);

  const isCartEmpty = cart.length === 0;

  return (
    <CartStyled>
      <Total amountToPay={formatPrice(0)} />
      <CartProducts cart={cart} isCartEmpty={isCartEmpty} />
      <Footer />
    </CartStyled>
  );
}

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.secondary};
  background-color: ${theme.colors.quaternary};
  position: relative;
  overflow: hidden;
`;
