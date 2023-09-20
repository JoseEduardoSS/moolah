import { useSetRecoilState } from "recoil";
import { isAuthenticatedState } from "../authState";

const useLogout = () => {
  const setLogin = useSetRecoilState<boolean>(isAuthenticatedState);
  return () => setLogin(false);
};

export default useLogout;
