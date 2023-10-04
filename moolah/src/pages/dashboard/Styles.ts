import { styled } from "@mui/material";

export const AppContainer = styled("div")({
	display: "grid",
	height: "100vh",
	gridTemplateColumns: "1fr 3fr",
	gridTemplateRows: "1fr",
	gridTemplateAreas: ". .",
	padding: "20px",
	rowGap: "3rem",
	columnGap: "3rem",
});
