import {
	Body,
	FormContainer,
	FormInput,
	GoogleButton,
	GoogleIcon,
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
import { FirebaseError } from "firebase/app";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [formError, setFormError] = useState<boolean>(false);

	const setAlert = useAlert();

	const navigate = useNavigate();

	const signIn = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (!userCredential.user.emailVerified) {
					throw new FirebaseError(
						"auth/email-not-verified",
						"auth/email-not-verified"
					);
				}
				navigate("/");
			})
			.catch((error) => {
				const errorMessages: Record<string, string> = {
					"auth/invalid-email": "Email inválido",
					"auth/user-not-found": "Usuário não encontrado",
					"auth/missing-password": "Senha não informada",
					"auth/wrong-password": "Senha incorreta",
					"auth/invalid-login-credentials": "Email ou senha inválidos",
					"auth/email-not-verified": "Email não verificado",
					default: "Erro ao fazer login",
				};

				const errorMessage = errorMessages[error.code] || errorMessages.default;

				setFormError(true);
				setAlert(true, errorMessage, "error");

				console.log("error: ", error);
			});
	};

	return (
		<Body>
			<Stack
				direction="column"
				divider={<Divider orientation="horizontal" flexItem />}
				spacing={1}
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
						autoComplete="on"
					/>

					<Stack direction="column" spacing={1}>
						<LoginButton
							type="submit"
							variant="outlined"
							endIcon={<LoginOutlined />}
						>
							Log In
						</LoginButton>
						<p>ou</p>
						<GoogleButton variant="outlined">
							<GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />{" "}
							Acessar com Google
						</GoogleButton>
					</Stack>
				</FormContainer>

				<SignupContainer>
					<LoginButton variant="outlined" onClick={() => navigate("/signup")}>
						Criar Conta
					</LoginButton>
				</SignupContainer>
			</Stack>
		</Body>
	);
};

export default Login;
