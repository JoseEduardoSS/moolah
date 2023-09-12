import {Button, styled, TextField} from "@mui/material";

export const Body = styled("body")({
  background: "linear-gradient(to bottom, #3d3754, #000000)",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const LoginContainer = styled("div")({
  backgroundColor: "RGB(137, 136, 189, 0.1)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  color: "#d4ccd8",
  textAlign: "center",
  height: "45vh",
  width: "15vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const LoginTitle = styled("h1")({
  fontSize: "24px",
  marginBottom: "20px",
});

export const LoginInput = styled(TextField)({
  width: "100%",
  padding: "10px",
  marginBottom: "10px",

  "& .MuiInputBase-root": {
    color: "#d4ccd8",
    fontFamily: "Lato, sans-serif",
  }
});

export const LoginButton = styled(Button)({
  color: "#d4ccd8",
  border: "1px solid #8988bd",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  fontFamily: "Lato, sans-serif",

  "&:hover": {
    border: "1px solid #3d3754",
  },
});
