import React from "react";
import { AppContainer } from "./Style";
import Form from "./components/form";
import Table from "./components/table";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <AppContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Form />
        <Table />
      </LocalizationProvider>
    </AppContainer>
  );
}

export default App;
