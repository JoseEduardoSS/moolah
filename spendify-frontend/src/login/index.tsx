import {Body, LoginButton, LoginContainer, LoginInput, LoginTitle} from "./Styles";

const Login = () => {
    return (
        <Body>
            <LoginContainer>
                <LoginTitle>Login</LoginTitle>
                <LoginInput variant="filled" type="text" placeholder="Nome de usuário"/>
                <LoginInput variant="filled" type="password" placeholder="Senha"/>
                <LoginButton variant="outlined">Login</LoginButton>
            </LoginContainer>
        </Body>
    )
}

export default Login;