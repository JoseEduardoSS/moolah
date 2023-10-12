export enum MovementType {
	Input = "Receita",
	Output = "Despesa",
}

type UID = string;

export interface Movement {
	id?: UID;
	movementType: MovementType;
	amount: number;
	tag: string;
	date: Date;
	description?: string;
}
