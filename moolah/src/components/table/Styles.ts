import { styled, Table, TableContainer, TableRow } from "@mui/material";
import { graphite } from "../../UI/variables";

export const TableStyled = styled(Table)({
	minWidth: "650px",
});

export const TableContainerStyled = styled(TableContainer)({
	borderRadius: "0.5rem",
	backgroundColor: "transparent",
});

export const TableRowStyled = styled(TableRow)(({ theme }) => ({
	th: {
		fontSize: "1.05rem",
	},
	"th, td, tr": {
		color: "white",
		borderColor: graphite,
	},
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th, &:last-child tr": {
		border: 0,
	},
}));
