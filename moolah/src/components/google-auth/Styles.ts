import styled from "@emotion/styled";
import { lightGrey } from "../../UI/variables";
import { Button } from "@mui/material";

export const GoogleButton = styled(Button)({
	border: `1px solid #db4a39 `,
	color: lightGrey,
	borderRadius: "2.5px",
	width: "100%",
});

export const GoogleIcon = styled("img")({
	marginRight: "10px",
});
