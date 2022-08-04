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




export default function TableEstilizada({ lojas }) {
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
 
    return (

        <div className="Corpo">


            <div classsName="Tabela">
                <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto' }} >
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Imagem</StyledTableCell>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Nome</StyledTableCell>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Ramo</StyledTableCell>
                                <StyledTableCell align="center" sx={{ fontSize: '1.1rem' }}>Ações</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lojas.map((loja) => (

                                <StyledTableRow key={loja.nome}>
                                    <StyledTableCell component="th" scope="row" align="left">
                                        {loja.imagem}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{loja.nome}</StyledTableCell>
                                    <StyledTableCell align="left">{loja.ramo}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button size="small" color="primary">EDITAR</Button>
                                        <Button size="small" color="error">DELETAR</Button>
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
