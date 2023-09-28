import { useSetRecoilState } from "recoil";
import { userState } from "../userState";

const useLogOut = () => {
	const setUser = useSetRecoilState(userState);
	localStorage.removeItem("user");
	setUser(null);
};

export default useLogOut;
