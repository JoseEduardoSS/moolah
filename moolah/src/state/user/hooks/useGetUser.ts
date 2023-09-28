import { useRecoilState } from "recoil";
import { userState } from "../userState";
import { User } from "firebase/auth";

const useGetUser = (): User => {
	const recoilUser = useRecoilState(userState)[0];

	const localStorageUserString = localStorage.getItem("user");
	const user = localStorageUserString && JSON.parse(localStorageUserString);

	return recoilUser || user;
};

export default useGetUser;
