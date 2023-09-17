import {
  Body,
  FormContainer,
  FormTitle,
  LoginButton,
  FormInput,
} from "../Styles";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const logIn = (event: React.SyntheticEvent) => {
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
      <FormContainer onSubmit={logIn}>
        <FormTitle>Log In</FormTitle>
        <FormInput
          variant="filled"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormInput
          variant="filled"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <LoginButton type="submit" variant="outlined">
          Log In
        </LoginButton>
      </FormContainer>
    </Body>
  );
};

export default Login;
