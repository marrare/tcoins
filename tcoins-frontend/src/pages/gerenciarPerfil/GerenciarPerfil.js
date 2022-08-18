import React from 'react';
import './GerenciarPerfil.css';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function GerenciarPerfil() {
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
                    <input type="file" className='foto'></input>
                </div>
                <TextField 
                    autoComplete="given-name"
                    name="Nome"
                    required
                    fullWidth
                    id="firstName"
                    label="Nome"
                    autoFocus
                    size="small"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="standard-basic"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    size="small"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Nova Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Confirmar Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    className='Botao'

                >
                    Confirmar
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2 }}
                    className='Botao'
                >
                    Cancelar
                </Button>


            </div>
        </div>
    )
}

export default GerenciarPerfil;