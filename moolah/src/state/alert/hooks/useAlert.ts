import { useSetRecoilState } from "recoil";
import { AlertColor } from "@mui/material";
import { alertState } from "../alertState";

const useAlert = () => {
	const setAlert = useSetRecoilState(alertState);
	return (open: boolean, message: string, severity: AlertColor | undefined) => {
		setAlert({ open, message, severity });
	};
};

export default useAlert;
