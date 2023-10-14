import React from "react";
import { TableBody, TableCell, TableHead } from "@mui/material";
import { Movement } from "../../interfaces/Movement";
import { TableContainerStyled, TableRowStyled, TableStyled } from "./Styles";
import useGetMovements from "../../state/movements/hooks/useGetMovements";

const Table: React.FC = () => {
	const movements: Movement[] = useGetMovements();

	return (
		<TableContainerStyled>
			<TableStyled size="small">
				<TableHead>
					<TableRowStyled>
						<TableCell align="center">Tipo</TableCell>
						<TableCell align="center">Valor</TableCell>
						<TableCell align="center">Tag</TableCell>
						<TableCell align="center">Data</TableCell>
						<TableCell align="center">Descrição</TableCell>
					</TableRowStyled>
				</TableHead>
				<TableBody>
					{movements.map((row) => (
						<TableRowStyled
							key={row.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell scope="row" align="center">
								{row.movementType}
							</TableCell>
							<TableCell align="center">{row.amount}</TableCell>
							<TableCell align="center">{row.tag}</TableCell>
							<TableCell align="center">
								{row.date.toLocaleDateString()}
							</TableCell>
							<TableCell align="center">{row.description}</TableCell>
						</TableRowStyled>
					))}
				</TableBody>
			</TableStyled>
		</TableContainerStyled>
	);
};

export default Table;
