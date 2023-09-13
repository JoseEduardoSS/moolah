import React from "react";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MovementType } from "../../interfaces/Movement";
import { TableStyled } from "./Styles";

const fakeData = [
  {
    id: 1,
    movementType: MovementType.Input,
    amount: 1000,
    tag: "Salary",
    date: new Date(),
    description: "Salary Job",
  },
  {
    id: 2,
    movementType: MovementType.Input,
    amount: 100,
    tag: "Pix",
    date: new Date(),
    description: "Pix Duda",
  },
  {
    id: 3,
    movementType: MovementType.Output,
    amount: 30,
    tag: "Snack",
    date: new Date(),
    description: "Friday",
  },
  {
    id: 4,
    movementType: MovementType.Output,
    amount: 1500,
    tag: "Video Game",
    date: new Date(),
    description: "PS5",
  },
];

const Table: React.FC = () => {
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
          {fakeData.map((row) => (
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
