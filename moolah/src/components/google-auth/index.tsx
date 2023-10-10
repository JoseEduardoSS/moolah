import { signInWithPopup } from "firebase/auth";
import { GoogleButton, GoogleIcon } from "./Styles";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import useAlert from "../../state/alert/hooks/useAlert";

const GoogleAuth: React.FC = () => {
	const navigate = useNavigate();

	const alert = useAlert();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(() => {
				navigate("/");
			})
			.catch(() => {
				alert(true, "Erro ao fazer login com Google", "error");
			});
	};

	return (
		<GoogleButton variant="outlined" onClick={signInWithGoogle}>
			<GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
			Acessar com Google
		</GoogleButton>
	);
};

export default GoogleAuth;
