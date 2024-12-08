import React from "react";
import { Box, Button, Grid, TextField, Typography, Container } from "../../components";
import "../styles/auth.scss";

export default function SignIn(){
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
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />

          <Button className="auth-button" fullWidth variant="contained">
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
