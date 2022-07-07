import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Cadastro() {

  return (
    <div className='Container'>
      <div className="FormContainer">
        <div className="Form">

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <div className="FormContent">
            <TextField
              autoComplete="given-name"
              name="Nome"
              required
              fullWidth
              id="firstName"
              label="Nome"
              autoFocus
            />

            <TextField
              required
              fullWidth
              id="Email"
              label="Email"
              name="email"
              autoComplete="email"
            />

            <TextField
              required
              fullWidth
              name="Senha"
              label="Senha"
              type="password"
              id="password"
              autoComplete="Nova-senha"
            />
          </div>
          <div className='BotaoContainer'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CONFIRMAR
            </Button>
          </div>



        </div>

      </div>


    </div>
  );
}

export default Cadastro;