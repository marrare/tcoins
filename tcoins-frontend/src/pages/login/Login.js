import React from 'react';
import { useState, useEffect } from 'react';
import UsuarioService from '../../services/UsuarioService';
import {Navigate} from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [user, setUser] = useState();

    function handleOnChange(e){    
        setEmail(e.target.value);
        setSenha(e.target.value);
        console.log(email);
    }

    function autenticarUsuario() {
      
        if(email == user.email && senha == user.senha) {
            return <Navigate to="/" />
        }else{
            console.log("Credenciais incorretas")
        }
    }

      useEffect(() => {
        UsuarioService
          .getUsuario("id")
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);


    return (

        <div>

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
                    Login
                </Typography>
                <Box component="form" /* onSubmit={handleSubmit} */ noValidate sx={{ mt: 2, width: "400px" }}>
                    <Grid item xs={18}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            onChange={handleOnChange}
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={18}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="senha"
                            onChange={handleOnChange}
                            autoComplete="current-password"
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={autenticarUsuario}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Confirmar
                    </Button>
                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Esqueceu a senha?               // TODO - Alterar senha
                            </Link>
                        </Grid> */}

                    </Grid>
                </Box>
            </Box>

        </div>

    )
}

export default Login;
