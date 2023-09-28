import { useSetRecoilState } from "recoil";
import { userState } from "../userState";
import { User } from "firebase/auth";

const useLogIn = () => {
	const setUser = useSetRecoilState(userState);

	return (user: User) => {
		localStorage.setItem("user", JSON.stringify(user));

		setUser(user);
	};
};

export default useLogIn;
