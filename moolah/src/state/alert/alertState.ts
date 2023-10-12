import { AlertColor } from "@mui/material";
import { atom } from "recoil";

type AlertProps = {
	open: boolean;
	message: string;
	severity: AlertColor | undefined;
};

export const alertState = atom<AlertProps>({
	key: "alertState",
	default: {
		open: false,
		message: "",
		severity: undefined,
	},
});
