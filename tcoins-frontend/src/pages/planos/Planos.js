import React from 'react';
import './Planos.css'

import Button from '@mui/material/Button';

function Planos() {

    return (

        <div>
            <div className="planoAtual">
                <div className="titulo">
                    <h3>Plano Vigente</h3>
                </div>
                <div className='containerDetalhePlano'>
                    <div className="detalhePlano">
                        <p>Nome do Plano: </p>
                        <p>Data de Contratação: </p>
                        <p>Data de Expiração: </p>
                    </div>
                    <div className='botaoPlano'>
                    <Button
                        sx={{ marginBottom: 1 }}
                        className='botao'
                        type="submit"
                        color="success"
                        fullWidth
                        variant="contained"
                    >
                        Trocar de Plano
                    </Button>
                    <Button
                        type="submit"
                        color="error"
                        fullWidth
                        variant="outlined"
                    >
                        Cancelar Plano
                    </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Planos;