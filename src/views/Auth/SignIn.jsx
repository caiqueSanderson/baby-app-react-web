import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Grid, TextField, Typography, Container, Alert } from "../../components";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "../styles/auth.scss";

export default function SignIn() {
  const { login, authState, clearSuccessMessage } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (authState.successMessage) {
      const timeout = setTimeout(() => {
        clearSuccessMessage();
        navigate("/");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [authState.successMessage, clearSuccessMessage, navigate]);

  function handleLogin(e) {
    e.preventDefault();

    const isSuccess = login(email, password);

    if (!isSuccess) {
      setError("E-mail ou senha incorretos.");
    }
  }

  return (
    <Box className="auth-container">
      <Container className="auth-box">
        <Typography variant="h4" className="auth-title">
          Bem-vindo de volta
        </Typography>
        <Typography variant="body1" className="auth-subtitle">
          Faça login para continuar.
        </Typography>

        <Box component="form" className="auth-form">
          <TextField
            fullWidth
            label="E-mail"
            type="email"
            variant="outlined"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Alert severity="error" variant="outlined">
              {error}
            </Alert>
          )}

          {authState.successMessage && (
            <Alert severity="success" variant="outlined">
              {authState.successMessage}
            </Alert>
          )}

          <Button className="auth-button" fullWidth variant="contained" onClick={handleLogin}>
            Entrar
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Button sx={{ textTransform: "none" }} href="/signup">
                Não tem uma conta? Cadastre-se
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
