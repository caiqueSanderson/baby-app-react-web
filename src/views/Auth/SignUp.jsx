import React, { useState, useEffect } from "react";
import { Box, Button, Grid, TextField, Typography, Container, Alert } from "../../components";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "../styles/auth.scss";

export default function SignUp() {
  const { register, authState, clearSuccessMessage } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (authState.successMessage) {
      const timeout = setTimeout(() => {
        clearSuccessMessage();
        navigate("/signin");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [authState.successMessage, clearSuccessMessage, navigate]);

  function handleRegister(e) {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("As senhas diferem!");
      return;
    }

    register(email, password);
    setError("");
  }

  return (
    <Box className="auth-container">
      <Container className="auth-box">
        <Typography variant="h4" className="auth-title">
          Crie sua conta
        </Typography>
        <Typography variant="body1" className="auth-subtitle">
          Cadastre-se para gerenciar seu bebê.
        </Typography>

        <Box component="form" className="auth-form">
          <TextField
            fullWidth
            label="Nome completo"
            type="text"
            variant="outlined"
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <TextField
            fullWidth
            label="Confirme sua senha"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
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

          <Button className="auth-button" fullWidth variant="contained" onClick={handleRegister}>
            Cadastrar
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Button sx={{ textTransform: "none" }} href="/signin">
                Já tem uma conta? Faça login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
