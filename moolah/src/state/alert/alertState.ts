import { AlertColor } from "@mui/material";
import { atom } from "recoil";

type AlertState = {
	open: boolean;
	message: string;
	severity: AlertColor | undefined;
};

export const alertState = atom<AlertState>({
	key: "alertState",
	default: {
		open: false,
		message: "",
		severity: undefined,
	},
});
