import { Body, FormContainer, FormInput, LoginButton } from "../Styles";
import React from "react";

const signUp = (event: React.SyntheticEvent) => {
  console.log("signUp");
};

const CreateAccount: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");


  return (
    <Body>
      <FormContainer onSubmit={signUp}>
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
