import { useSetRecoilState } from "recoil";
import { userState } from "../userState";
import { useEffect } from "react";
import { auth } from "../../../firebase";
import { User } from "firebase/auth";

const useIsAuthenticated = () => {
  const setLogin = useSetRecoilState<User | null>(userState);

  useEffect(() => {
    return auth.onAuthStateChanged(setLogin);
  }, []);
};

export default useIsAuthenticated;
