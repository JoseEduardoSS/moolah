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
import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "../../../components/alert";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [formError, setFormError] = useState<boolean>(false);
	const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("cu");

	const navigate = useNavigate();

	const logIn = async (event: React.SyntheticEvent) => {
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

			setErrorMessage(errorMessage);
			setFormError(true);
			setOpenSnackbar(true);

			console.log("error: ", error);
		}
	};

	const handleCloseSnackbar = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackbar(false);
	};

	return (
		<Body>
			<FormContainer onSubmit={logIn}>
				<FormTitle>Log In</FormTitle>
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

			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity="error"
					sx={{ width: "100%" }}
				>
					{errorMessage}
				</Alert>
			</Snackbar>
		</Body>
	);
};

export default Login;
