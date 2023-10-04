import { useRecoilValue } from "recoil";
import { alertState } from "../alertState";

const useAlertProps = () => {
	return useRecoilValue(alertState);
};

export default useAlertProps;
