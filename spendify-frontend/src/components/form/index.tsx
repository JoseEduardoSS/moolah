import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { FormStyled } from "./Styles";
import { MovementType } from "../../interfaces/Movement";
import { DatePicker } from "@mui/x-date-pickers";

const Form: React.FC = () => {
  return (
    <FormStyled>
      <FormControl required fullWidth>
        <FormLabel id="radio-input-movement-type">
          Tipo de movimentação
        </FormLabel>
        <RadioGroup
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
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        }}
      />

      <FormControl required fullWidth>
        <InputLabel id="select-tag-label">Tag</InputLabel>
        <Select labelId="select-tag-label" id="select-tag" label="Tag">
          <MenuItem value={10}>Pix</MenuItem>
          <MenuItem value={20}>Assinatura</MenuItem>
          <MenuItem value={30}>Outros</MenuItem>
        </Select>
      </FormControl>

      <FormControl required fullWidth>
        <DatePicker />
      </FormControl>

      <TextField
        fullWidth
        id="descripition-input"
        label="Descrição"
        variant="outlined"
      />
    </FormStyled>
  );
};

export default Form;
