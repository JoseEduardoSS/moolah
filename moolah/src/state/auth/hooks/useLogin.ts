import { useSetRecoilState } from "recoil";
import { isAuthenticatedState } from "../authState";

const useLogin = () => {
  const setLogin = useSetRecoilState<boolean>(isAuthenticatedState);
  return () => setLogin(true);
};

export default useLogin;
