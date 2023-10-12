import { atom } from "recoil";
import { Movement } from "../../interfaces/Movement";

export const movementsState = atom<Movement[]>({
	key: "movementsState",
	default: [],
});
