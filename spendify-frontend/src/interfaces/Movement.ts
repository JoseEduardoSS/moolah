export enum MovementType {
  Input = "Receita",
  Output = "Despesa",
}

type UUID = string;

export interface Movement {
  id?: UUID;
  movementType: MovementType;
  amount: number;
  tag: string;
  date: Date;
  description?: string;
}