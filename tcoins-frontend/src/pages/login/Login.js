import React from 'react';
import { useState, useEffect } from 'react';
import UsuarioService from '../../services/UsuarioService';
import { useNavigate } from 'react-router-dom';
import Toasts from '../../components/Toasts'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ToastContainer } from 'react-toastify';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [user, setUser] = useState();
    const [userID, setUserID] = useState();

    function handleOnChange(e) {
        setEmail(e.target.value)
    }
    function OnChange(e) {
        setSenha(e.target.value)
    }
    function saveLocalStorage(e) {
        localStorage.setItem("userId", userID);



    }

    async function autenticarUsuario() {
        const user = await UsuarioService.login(email, senha).then((data) => {

            setUser(data.data.nome);
            setUserID(data.data.id)
            saveLocalStorage()
            if (userID) {
                navigate("/")


            }

        }).catch(() => {

            Toasts.erro('Email ou senha incorreta')
        });

    }
    useEffect(() => {
        localStorage.setItem("usuario", user)
    }, [user])


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
                            onChange={OnChange}
                            autoComplete="current-password"
                        />
                    </Grid>
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


                    <Button
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
