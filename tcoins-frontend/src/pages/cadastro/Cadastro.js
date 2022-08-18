import * as React from 'react';
import { useState } from 'react';
import UsuarioService from '../../services/UsuarioService';
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
import {useNavigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Toasts from '../../components/Toasts'

const theme = createTheme();

function Cadastro() {

  //teste

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState();
  let navigate = useNavigate();


  function handleOnChangeNome(e){    
    setNome(e.target.value);
  }

  function handleOnChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleOnChangeSenha(e) {
    setSenha(e.target.value);
  }
  
  function cadastrarUsuario() {
    const User = UsuarioService.postUsuario(nome,email,senha).then((data) => {

      navigate("/login", { replace: true });

  }).catch(() => {
      Toasts.erro('Não foi possivel cadastrar usuário')
  });;
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Nome"
                  required
                  fullWidth
                  id="nome"
                  onChange={handleOnChangeNome}
                  label="Nome"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  autoComplete="email"
                  id="email"
                  onChange={handleOnChangeEmail}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Senha"
                  label="Senha"
                  type="password"
                  autoComplete="Nova-senha"
                  id="senha"
                  onChange={handleOnChangeSenha}
                />
              </Grid>

            </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={cadastrarUsuario}
              sx={{ mt: 3, mb: 2 }}
            >
              CONFIRMAR
            </Button>
            <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='colored'
                    />

          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} />   */}
      </Container>
    </ThemeProvider>
  );
}

export default Cadastro;