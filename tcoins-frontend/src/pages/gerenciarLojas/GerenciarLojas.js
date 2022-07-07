import * as React from 'react';
import './GerenciarLojas.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(
    imagem: string,
    nome: string,
    ramo: string,
    editar: boolean,
    deletar: boolean,
) {
    return { imagem, nome, ramo, editar, deletar };
}

const rows = [
    createData('', 'Loja 1', 'Alimentício', 'Editar', 'Deletar'),
    createData('', 'Loja 2', 'Alimentício', 'Editar', 'Deletar'),
    createData('', 'Loja 3', 'Alimentício', 'Editar', 'Deletar'),
    createData('', 'Loja 4', 'Alimentício', 'Editar', 'Deletar'),
    createData('', 'Loja 5', 'Alimentício', 'Editar', 'Deletar'),
];

export default function CustomizedTables() {
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

            <div classsName="Tabela">
                <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto' }} >
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Imagem</StyledTableCell>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem'}}>Nome</StyledTableCell>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem'}}>Ramo</StyledTableCell>
                                <StyledTableCell align="center" sx={{ fontSize: '1.1rem'}}>Ações</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (

                                <StyledTableRow key={row.nome}>
                                    <StyledTableCell component="th" scope="row" align="left">
                                        {row.imagem}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.nome}</StyledTableCell>
                                    <StyledTableCell align="left">{row.ramo}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button size="small" color="primary">{row.editar}</Button>
                                        <Button size="small" color="error">{row.deletar}</Button>
                                    </StyledTableCell>
                                </StyledTableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}
