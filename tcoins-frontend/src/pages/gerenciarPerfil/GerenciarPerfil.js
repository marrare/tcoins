import React from 'react';
import './GerenciarPerfil.css';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import UsuarioService from '../../services/UsuarioService';

function GerenciarPerfil() {
    const [user, setUser] = useState([]);
    const [userID, setId] = useState();

    useEffect(() => {
        setInterval(() => {
          const idUsuario = localStorage.getItem('userId');
          setId(idUsuario);
          getUser();
        }, 1000);
      }, []);
      useEffect(() => {
        const idUsuario = localStorage.getItem('userId')
        setId(idUsuario)
        getUser();
      }, [userID])
    async function getUser() {
        console.log("gerenciar")
        if(userID != "undefined"){
            const usuario = await UsuarioService.getUsuario(userID).then((user)=>{ setUser(user.data)})
        }
    
      }
    return (

        <div className='container'>
            <Stack direction="row" spacing={2}>
                <Avatar src="/broken-image.jpg" className='avatar' sx={{ width: 150, height: 150 }} />
            </Stack>
            <div className="FormContent">
                <div className="campofoto">
                      {/*  <TextField sx={{marginBottom: 1 }}
                            name="upload-photo"
                            type="file"
                            fullWidth
                            size="small"
                    /> */}
                </div>
                <TextField 
                    name="Nome"
                    disabled
                    fullWidth
                    label={user.nome}
                    size="small"
                />
                <TextField
                    margin="normal"
                    disabled
                    fullWidth
                    id="standard-basic"
                    label={user.email}
                    size="small"
                />
                <TextField
                    margin="normal"
                    disabled
                    fullWidth
                    id="standard-basic"
                    label={user.codigoUser}
                    size="small"
                />
            </div>
        </div>
    )
}

export default GerenciarPerfil;