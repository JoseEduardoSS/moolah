import { Button, styled, TextField } from "@mui/material";

export const Body = styled("body")({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const LoginContainer = styled("form")({
  borderRadius: "2.5px",
  boxShadow: "0 0 2.5px rgba(0, 0, 0, 0.2)",
  height: "25rem",
  width: "17.5rem",
  padding: "20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const LoginTitle = styled("h1")({
  fontSize: "2rem",
  marginBottom: "20px",
});

export const LoginInput = styled(TextField)({
  width: "100%",
  padding: "10px",
  marginBottom: "10px",

  "& .MuiInputBase-root": {
    fontFamily: "Lato, sans-serif",
  },
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
