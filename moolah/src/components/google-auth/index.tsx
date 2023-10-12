import { signInWithPopup } from "firebase/auth";
import { GoogleButton, GoogleIcon } from "./Styles";
import { auth, db, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import useAlert from "../../state/alert/hooks/useAlert";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth: React.FC = () => {
	const navigate = useNavigate();

	const alert = useAlert();

	const signInWithGoogle = async () => {
		try {
			const userCredential = await signInWithPopup(auth, provider);

			const user = doc(db, "users", userCredential.user.uid);
			const userSnap = await getDoc(user);

			console.log(userSnap.data());

			if (userSnap.exists()) {
				navigate("/");
				return;
			}

			const userRef = doc(db, "users", userCredential.user.uid);
			await setDoc(userRef, {
				email: userCredential.user.email,
				uid: userCredential.user.uid,
				createdAt: new Date().toISOString().split("T")[0],
			});

			navigate("/");
		} catch (error) {
			alert(true, "Erro ao fazer login com Google", "error");
		}
	};

	return (
		<GoogleButton variant="outlined" onClick={signInWithGoogle}>
			<GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
			Acessar com Google
		</GoogleButton>
	);
};

export default GoogleAuth;
