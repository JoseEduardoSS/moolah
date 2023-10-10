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

	const [passwordError, setPasswordError] = useState<ConstrainBoolean>(false);
	const [emailError, setEmailError] = useState<boolean>(false);

	const alert = useAlert();

	const signUp = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		if (password.length < 8 || !/\d/.test(password)) {
			setPasswordError(true);
			alert(
				true,
				"A senha deve ter no mínimo 8 caracteres, incluindo pelo menos 1 número",
				"error"
			);
			return;
		} else {
			setPasswordError(false);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setEmailError(true);
			alert(true, "Email inválido", "error");
			return;
		} else {
			setEmailError(false);
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				sendEmailVerification(userCredential.user);
				auth.signOut();
				alert(true, "Email de confirmação enviado", "success");
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					setEmailError(true);
					alert(true, "Email já está em uso", "error");
				}
			});
	};

	return (
		<Body>
			<FormContainer onSubmit={signUp}>
				<h1>Criar Conta</h1>
				<FormInput
					{...(emailError && { error: true })}
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
					placeholder="Confirmar Senha"
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
