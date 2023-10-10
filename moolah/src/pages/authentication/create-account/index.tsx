import { Body, FormContainer, FormInput, LoginButton } from "../Styles";
import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import useAlert from "../../../state/alert/hooks/useAlert";

const CreateAccount: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");

	const [passwordError, setPasswordError] = useState<boolean>(false);

	const alert = useAlert();

	const signUp = (event: React.SyntheticEvent) => {
		event.preventDefault();

		//TODO Criar validações para o email e senha

		if (password !== confirmPassword) {
			setPasswordError(true);
			alert(true, "As senhas não coincidem", "error");
		} else {
			setPasswordError(false);
			alert(false, "As senhas não coincidem", "error");

			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					sendEmailVerification(userCredential.user);
					auth.signOut();
					alert(true, "Email de confirmação enviado", "info");
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<Body>
			<FormContainer onSubmit={signUp}>
				<h1>Criar Conta</h1>
				<FormInput
					variant="filled"
					type="text"
					placeholder="Email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<FormInput
					{...(passwordError && { error: true })}
					variant="filled"
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<FormInput
					{...(passwordError && { error: true })}
					variant="filled"
					type="password"
					placeholder="Senha"
					value={confirmPassword}
					onChange={(event) => setConfirmPassword(event.target.value)}
				/>
				<LoginButton type="submit" variant="outlined">
					Sign Up
				</LoginButton>
			</FormContainer>
		</Body>
	);
};

export default CreateAccount;
