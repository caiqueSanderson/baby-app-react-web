import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography, Container, Alert } from "../../components";
import { useNavigate } from "react-router-dom";

import { getStoredDataLocalStorage } from '../../services/auth'
import "../styles/auth.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  function verificationEmailAndPasswordMatch(e) {
    e.preventDefault();

    const { storedEmail, storedPassword } = getStoredDataLocalStorage();

    if (email === storedEmail && password === storedPassword) {
      setError("");
      setSuccess(true);
      navigate("/")
    } else {
      setSuccess(false);
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
            <Typography color="error" variant="body2" align="center" margin="normal">
              {error}
            </Typography>
          )}

          {success && (
            <Alert severity="success" style={{ margin: '10px 0' }}>
              Login bem-sucedido!
            </Alert>
          )}

          <Button className="auth-button" fullWidth variant="contained" onClick={verificationEmailAndPasswordMatch}>
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
};

