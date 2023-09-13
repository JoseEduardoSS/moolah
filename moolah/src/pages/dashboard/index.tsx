import React from "react";
import { AppContainer } from "./Styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Form from "../../components/form";
import Table from "../../components/table";

const Dashboard: React.FC = () => {
  return (
    <AppContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Form />
        <Table />
      </LocalizationProvider>
    </AppContainer>
  );
};

export default Dashboard;
