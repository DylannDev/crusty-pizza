/* eslint-disable react/prop-types */

import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">
        <Logo />
      </div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.background_white};
  padding: 0px 70px 0px 20px;

  .left-side {
    cursor: pointer;
  }
`;
