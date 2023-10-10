import { Button, styled, TextField } from "@mui/material";
import { grey, lightGrey } from "../../UI/variables";

export const Body = styled("div")({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const FormContainer = styled("form")({
	backgroundColor: "transparent",
	height: "25rem",
	width: "17.5rem",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	h1: {
		fontSize: "2rem",
		fontWeight: "lighter",
		marginBottom: "20px",
		color: lightGrey,
	},

	p: {
		fontSize: "1rem",
		fontWeight: "lighter",
		color: lightGrey,
	},

	div: {
		width: "100%",
	},
});

export const FormInput = styled(TextField)({
	width: "100%",
	padding: "10px",
	margin: "10px 0",

	"& .MuiInputBase-root": {
		fontFamily: "Lato, sans-serif",
		color: lightGrey,
		borderRadius: "2.5px",
		backgroundColor: "transparent",
	},

	"& .MuiInputBase-input": {
		textAlign: "center",
	},

	"& .MuiInputBase-input::placeholder": {
		textAlign: "center",
	},
});

export const LoginButton = styled(Button)({
	color: lightGrey,
	border: `1px solid ${grey}`,
	padding: "10px 20px",
	borderRadius: "2.5px",
	cursor: "pointer",
	transition: "background-color 0.3s",
	fontFamily: "Lato, sans-serif",
	width: "100%",

	"&:hover": {
		border: `1px solid ${lightGrey}`,
	},
});

export const SignupContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "10px 0px",

	h2: {
		fontSize: "1.25rem",
		fontWeight: "lighter",
		color: lightGrey,
		marginBottom: "10px",
	},
});
