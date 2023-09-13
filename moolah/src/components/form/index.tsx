import React, { FormEvent, useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { FormStyled } from "./Styles";
import { MovementType } from "../../interfaces/Movement";
import { DatePicker } from "@mui/x-date-pickers";
import { Add } from "@mui/icons-material";

const Form: React.FC = () => {
  const [movementType, setMovementType] = useState<MovementType>(
    MovementType.Input
  );
  const [amount, setAmount] = useState<number>(0);
  const [tag, setTag] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      movementType,
      amount,
      tag,
      date,
      description,
    });
  };

  return (
    <Paper>
      <FormStyled onSubmit={submit}>
        <FormControl required fullWidth>
          <FormLabel id="radio-input-movement-type">
            Tipo de movimentação
          </FormLabel>
          <RadioGroup
            onChange={(event) =>
              setMovementType(event.target.value as MovementType)
            }
            row
            aria-labelledby="radio-input-movement-type"
            name="radio-input-movement-type"
          >
            <FormControlLabel
              value={MovementType.Input}
              control={<Radio />}
              label="Receita"
            />
            <FormControlLabel
              value={MovementType.Output}
              control={<Radio />}
              label="Despesa"
            />
          </RadioGroup>
        </FormControl>

        <TextField
          fullWidth
          required
          id="amount-input"
          label="Valor"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <FormControl required fullWidth>
          <InputLabel id="select-tag-label">Tag</InputLabel>
          <Select
            labelId="select-tag-label"
            id="select-tag"
            label="Tag"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          >
            <MenuItem value={"Pix"}>Pix</MenuItem>
            <MenuItem value={"Assinatura"}>Assinatura</MenuItem>
            <MenuItem value={"Outros"}>Outros</MenuItem>
          </Select>
        </FormControl>

        <FormControl required fullWidth>
          <DatePicker value={date} onChange={(newDate) => setDate(newDate)} />
        </FormControl>

        <TextField
          fullWidth
          id="descripition-input"
          label="Descrição"
          variant="outlined"
          onChange={(event) => setDescription(event.target.value)}
        />

        <Button type="submit" variant="outlined" endIcon={<Add />}>
          Adicionar
        </Button>
      </FormStyled>
    </Paper>
  );
};

export default Form;
