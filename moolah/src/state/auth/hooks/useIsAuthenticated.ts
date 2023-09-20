import { useSetRecoilState } from "recoil";
import { userState } from "../userState";
import { User } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../firebase";

const useIsAuthenticated = () => {
  const setLogin = useSetRecoilState<User | null>(userState);

  useEffect(() => {
    return auth.onAuthStateChanged(setLogin);
  }, []);
};

export default useIsAuthenticated;
