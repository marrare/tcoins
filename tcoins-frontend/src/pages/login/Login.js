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
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
    const firebaseConfig = {
        apiKey: "AIzaSyBr7xDG3FPEYPMaiOnMlJNxVJMnJ4-A12k",
        authDomain: "t-coins-a913f.firebaseapp.com",
        projectId: "t-coins-a913f",
        storageBucket: "t-coins-a913f.appspot.com",
        messagingSenderId: "590110810673",
        appId: "1:590110810673:web:32540c4b9bbe2b709fab10",
        measurementId: "G-G5VVCP0RKK"
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();

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
        if (userID) {
            navigate("/")
        }
    }

    async function autenticarUsuario() {
        const user = await UsuarioService.login(email, senha).then((data) => {

            setUser(data.data.nome);
            setUserID(data.data.id)
            saveLocalStorage()
            

        }).catch(() => {

            Toasts.erro('Email ou senha incorreta')
        });

    }
    useEffect(() => {
        localStorage.setItem("usuario", user);
        saveLocalStorage()
    }, [user])

     function signInWithGoogle () {
        signInWithPopup(auth, provider)
          .then((result) => {
            const emailGoogle = result.user.email;
            const user = UsuarioService.login(emailGoogle, 'senha').then((data) => {

                setUser(data.data.nome);
                setUserID(data.data.id)
                saveLocalStorage()
                if (userID) {
                    navigate("/")
    
    
                }
    
            }).catch(() => {
    
                Toasts.erro('Email ou senha incorreta')
            });
      
          })
          .catch((error) => {
            console.log(error);
          });
      };
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
                    <Button
              fullWidth
              variant="contained"
              onClick={signInWithGoogle}
              sx={{ mt: 3, mb: 2 }}
            >
              login com google
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
