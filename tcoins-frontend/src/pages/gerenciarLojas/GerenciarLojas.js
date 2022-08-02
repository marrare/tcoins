import * as React from 'react';
import './GerenciarLojas.css';
import LojaService from '../../services/LojaService';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableEstilizada from '../../components/TableTcoins';
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        /* backgroundColor: theme.palette.common.black, */
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function GerenciarLojas() {
    const { userId } = useParams();
    const [lojasPorDono, setLojasPorDono] = useState([0]);
    //puxando o primeiro array
    const lojasDetalhadas = lojasPorDono[0]

    //pegar os dados por página
    useEffect(() => {

        getLojasPorDono();


    }, [])


    async function getLojasPorDono() {
        const lojasGerenciadas = await LojaService.getLojasByUser(userId, '', '');
        if (lojasGerenciadas.status == 200 || lojasGerenciadas.status == 404) setLojasPorDono(lojasGerenciadas.data);

    }
    return (

        <div className="Corpo">
            <div className="Barra">
                <Paper
                    className="BarraPesquisa"
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 1000, marginTop: '60px', marginBottom: '30px' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Buscar por nome"
                        inputProps={{ 'aria-label': 'Buscar por nome' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="add">
                        <AddIcon />
                    </IconButton>
                </Paper>
            </div>

            <TableEstilizada lojas={lojasPorDono}></TableEstilizada>

        </div>
    );
}
