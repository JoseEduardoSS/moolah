import {
  Body,
  FormContainer,
  FormInput,
  FormTitle,
  LoginButton,
} from "../Styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";

const CreateAccount: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("sign up");
  };

  return (
    <Body>
      <FormContainer onSubmit={signUp}>
        <FormTitle>Create Account</FormTitle>
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
          Sign Up
        </LoginButton>
      </FormContainer>
    </Body>
  );
};

export default CreateAccount;
