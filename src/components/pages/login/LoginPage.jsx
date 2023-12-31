import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo
        className="logo-login-page"
        src={"/images/logo-crusty-pizza-jaune.png"}
      />
      <LoginForm />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/background-login-page.jpeg") rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  .logo-login-page {
    width: 600px;
  }
`;
