import React from "react";
import { Box, Button, Grid, TextField, Typography, Container } from "../../components";
import "../styles/auth.scss";

export default function SignUp(){
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
          />
          <TextField
            fullWidth
            label="E-mail"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Confirme sua senha"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />

          <Button className="auth-button" fullWidth variant="contained">
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
};
