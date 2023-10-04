import {
	Body,
	FormContainer,
	FormInput,
	LoginButton,
	SignupContainer,
} from "../Styles";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@mui/icons-material";
import { Divider, Stack } from "@mui/material";
import useAlert from "../../../state/alert/hooks/useAlert";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [formError, setFormError] = useState<boolean>(false);

	const setAlert = useAlert();

	const navigate = useNavigate();

	const signIn = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error: any) {
			const errorMessages: Record<string, string> = {
				"auth/invalid-email": "Email inválido",
				"auth/user-not-found": "Usuário não encontrado",
				"auth/missing-password": "Senha não informada",
				"auth/wrong-password": "Senha incorreta",
				"auth/invalid-login-credentials": "Email ou senha inválidos",
				default: "Erro ao fazer login",
			};

			const errorMessage = errorMessages[error.code] || errorMessages.default;

			setFormError(true);
			setAlert(true, errorMessage, "error");

			console.log("error: ", error);
		}
	};

	return (
		<Body>
			<Stack
				direction="column"
				divider={<Divider orientation="horizontal" flexItem />}
				spacing={0}
			>
				<FormContainer onSubmit={signIn}>
					<h1>Login</h1>
					<FormInput
						{...(formError && { error: true })}
						variant="filled"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<FormInput
						{...(formError && { error: true })}
						variant="filled"
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<LoginButton
						type="submit"
						variant="outlined"
						endIcon={<LoginOutlined />}
					>
						Log In
					</LoginButton>
				</FormContainer>
				<SignupContainer>
					<h2>Não tem uma conta?</h2>
				</SignupContainer>
			</Stack>
		</Body>
	);
};

export default Login;
