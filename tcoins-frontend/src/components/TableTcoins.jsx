import * as React from 'react';
import LojaService from '../services/LojaService';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toasts from './Toasts';
import App from '../App.css'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';




export default function TableEstilizada({ lojas }) {

    //logica para campos da tabela


    // const header = head[];
    // const campos = campos[];
    // // const doubled = head.map();
    // console.log(doubled);


    //logica de imagem
    const imageDefault = "data:image/png;base64,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";

    // let idLoja;
    // const [getId, setId] = useState();
    const deleteRow = (id, e) => {
        console.log(id);
        deleteLoja(id)
    }

    // useEffect(() => {
    //     console.log(getId)
    // }, [getId])



    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            /* backgroundColor: theme.palette.common.black, */
            /* backgroundColor: theme.palette.primary.dark, */
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

    async function deleteLoja(id) {
        const loja = await LojaService.deleteLoja(id).then(() => {
            Toasts.sucesso('Loja deletada com sucesso!')

        }).catch(() => {
            Toasts.erro('Erro ao deletar loja!')
        })

        // if () {

        // } else if (loja.status == 500) {

        // };

    }

    return (

        <div className="Corpo">


            <div classsName="Tabela" className="TableCostumizada">
                <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto' }} >
                    <Table aria-label="customized table" >
                        <TableHead >
                            <TableRow className="HeaderTabela">
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Imagem</StyledTableCell>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Nome</StyledTableCell>
                                <StyledTableCell align="left" sx={{ fontSize: '1.1rem' }}>Ramo</StyledTableCell>
                                <StyledTableCell align="center" sx={{ fontSize: '1.1rem' }}>Ações</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {lojas.map((loja, i) => (

                                <StyledTableRow key={loja.nome}>
                                    <StyledTableCell component="th" scope="row" align="left">
                                        <img className='fotoTabela' src={loja.imagem === null || loja.imagem == '' || loja.imagem === undefined ? imageDefault : loja.imagem} alt="Imagem da Loja"></img>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{loja.nome}</StyledTableCell>
                                    <StyledTableCell align="left">{loja.ramo}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {/* <Button size="small" color="primary" >EDITAR</Button> */}
                                        <Button size="small" color="error" onClick={(e) => deleteRow(loja.id, e)}>DELETAR</Button>
                                    </StyledTableCell>
                                </StyledTableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
            </div>

        </div >
    );
}
