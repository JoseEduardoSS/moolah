import {
  Body,
  FormContainer,
  FormInput,
  FormTitle,
  LoginButton,
} from "../Styles";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import useAuthenticatedUser from "../../../state/auth/hooks/useAuthenticatedUser";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const logIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
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
