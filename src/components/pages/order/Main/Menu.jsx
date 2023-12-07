import styled from "styled-components";
import Product from "./Product";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";

export default function Menu() {
  const { menu } = useContext(AdminContext);
  return (
    <MenuStyled>
      {menu.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          imageSource={product.imageSource}
          vegetarien={product.vegetarien}
          description={product.description}
          price={product.price}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 280px));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 50px 50px 150px;
  justify-content: center;
  overflow-y: scroll;
  /* width: 1350px; */
`;
