import { useSetRecoilState } from "recoil";
import { movementsState } from "../movementsState";
import { Movement } from "../../../interfaces/Movement";

const useSetMovements = () => {
	const setMovements = useSetRecoilState(movementsState);

	return (movements: Movement[]) => setMovements(movements);
};

export default useSetMovements;
