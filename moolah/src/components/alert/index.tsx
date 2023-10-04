import React from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import useAlertProps from "../../state/alert/hooks/useAlertProps";
import useAlert from "../../state/alert/hooks/useAlert";

const Alert: React.FC = () => {
	const { open, message, severity } = useAlertProps();
	const setAlert = useAlert();

	const handleCloseAlert = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setAlert(false, message, severity);
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			open={open}
			autoHideDuration={6000}
			onClose={handleCloseAlert}
		>
			<MuiAlert
				elevation={3}
				variant="filled"
				onClose={handleCloseAlert}
				severity={severity}
				sx={{ width: "100%" }}
			>
				{message}
			</MuiAlert>
		</Snackbar>
	);
};

export default Alert;
