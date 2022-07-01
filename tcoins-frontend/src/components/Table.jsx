import * as React from 'react';

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
import { useState, useEffect } from 'react';




export default function TableEstilizada({ dados }, { cabecalho }) {
    //logica para campos da tabela
    // const header = head[];
    // const campos = campos[];
    // // const doubled = head.map();
    // console.log(doubled);

    // const [getHeader, setHeader] = useState([]);

    // useEffect(() => {
    //     setHeader(head);
    // }, [])



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
    // function createData(
    //     imagem: string,
    //     nome: string,
    //     ramo: string,
    //     editar: boolean,
    //     deletar: boolean,
    // ) {
    //     return { imagem, nome, ramo, editar, deletar };
    // }

    // const rows = [
    //     createData('', 'Loja 1', 'Alimentício', 'Editar', 'Deletar'),
    //     createData('', 'Loja 2', 'Alimentício', 'Editar', 'Deletar'),
    //     createData('', 'Loja 3', 'Alimentício', 'Editar', 'Deletar'),
    //     createData('', 'Loja 4', 'Alimentício', 'Editar', 'Deletar'),
    //     createData('', 'Loja 5', 'Alimentício', 'Editar', 'Deletar'),
    // ];

    return (

        <div className="Corpo">


            <div classsName="Tabela">
                <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto' }} >
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>


                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>ID</StyledTableCell>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Nome</StyledTableCell>
                                <StyledTableCell align="center" sx={{ fontSize: '1.1rem' }}>Ação</StyledTableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dados.map((campo, l) => (

                                <StyledTableRow key={campo}>
                                    <StyledTableCell component="th" scope="row" align="left">
                                        {campo.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{campo.nome}</StyledTableCell>

                                    <StyledTableCell align="center">
                                        <Button size="small" color="primary">Editar</Button>
                                        <Button size="small" color="error">Deletar</Button>
                                    </StyledTableCell>
                                </StyledTableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div >
    );
}
