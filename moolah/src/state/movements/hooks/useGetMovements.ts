import { useRecoilValue } from "recoil";
import { movementsState } from "../movementsState";

const useGetMovements = () => {
	return useRecoilValue(movementsState);
};

export default useGetMovements;
