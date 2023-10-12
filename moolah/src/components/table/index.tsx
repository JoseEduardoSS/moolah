import React, { useEffect, useState } from "react";
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
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Table: React.FC = () => {
	const [movements, setMovements] = useState<Movement[]>([]);

	const user = auth.currentUser;

	useEffect(() => {
		if (!user) {
			return;
		}
		const unsubscribe = onSnapshot(
			collection(db, "users", user.uid, "movements"),
			(snapshot) => {
				const movements: Movement[] = snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						movementType: doc.data().movementType,
						amount: doc.data().amount,
						tag: doc.data().tag,
						date: new Date(doc.data().date),
						description: doc.data().description,
					} as Movement;
				});
				setMovements(movements);
			}
		);
		return () => unsubscribe();
	}, [user]);

	return (
		<TableContainer component={Paper}>
			<TableStyled aria-label="simple table">
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
