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
import useLogIn from "../../../state/user/hooks/useLogIn";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const navigate = useNavigate();
	const logIn = useLogIn();

	const handleLogIn = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			logIn(userCredential.user);

			navigate("/");
		} catch (error) {
			console.log("error: ", error);
		}
	};

	return (
		<Body>
			<FormContainer onSubmit={handleLogIn}>
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
