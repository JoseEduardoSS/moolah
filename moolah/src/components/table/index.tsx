import React from "react";
import {
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { Movement } from "../../interfaces/Movement";
import { TableStyled } from "./Styles";
import useGetMovements from "../../state/movements/hooks/useGetMovements";

const Table: React.FC = () => {
	const movements: Movement[] = useGetMovements();

	return (
		<TableContainer component={Paper}>
			<TableStyled size="small">
				<TableHead>
					<TableRow>
						<TableCell>Tipo</TableCell>
						<TableCell align="center">Valor</TableCell>
						<TableCell align="center">Tag</TableCell>
						<TableCell align="center">Data</TableCell>
						<TableCell align="center">Descrição</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{movements.map((row) => (
						<TableRow
							key={row.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.movementType}
							</TableCell>
							<TableCell align="center">{row.amount}</TableCell>
							<TableCell align="center">{row.tag}</TableCell>
							<TableCell align="center">
								{row.date.toLocaleDateString()}
							</TableCell>
							<TableCell align="center">{row.description}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TableStyled>
		</TableContainer>
	);
};

export default Table;
