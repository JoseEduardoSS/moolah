import {
  Body,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginTitle,
} from "./Styles";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const signIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("sign in");
  };

  return (
    <Body>
      <LoginContainer onSubmit={signIn}>
        <LoginTitle>Log In</LoginTitle>
        <LoginInput
          variant="filled"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <LoginInput
          variant="filled"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <LoginButton type="submit" variant="outlined">
          Log In
        </LoginButton>
      </LoginContainer>
    </Body>
  );
};

export default Login;
