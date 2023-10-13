import React, { useEffect } from "react";
import { DashboardContainer } from "./Styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Form from "../../components/form";
import Table from "../../components/table";
import { auth, db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Movement } from "../../interfaces/Movement";
import useSetMovements from "../../state/movements/hooks/useSetMovements";

const Dashboard: React.FC = () => {
	const setMovements = useSetMovements();

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
	}, [setMovements, user]);

	return (
		<DashboardContainer>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Form />
				<Table />
			</LocalizationProvider>
		</DashboardContainer>
	);
};

export default Dashboard;
