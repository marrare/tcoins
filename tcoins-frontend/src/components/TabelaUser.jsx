import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function TabelaUser() {
    function createData(loja, produtos, compra_tcoins, total_recompensas, preco_total, data_compra) {
        return { loja, produtos, compra_tcoins, total_recompensas, preco_total, data_compra };
    }
    /*exemplo de dados
      produtos sendo um array
      */
    const rows = [
        createData('Loja 1', 'produto198', 'SIM', 24, '', '24/04/2022'),
        createData('Loja 4', 'produto198', 'SIM', 37, '', '22/05/2022'),
        createData('Loja 2', 'produto198', 'NÃO', '', 6.0, '21/04/2022'),
        createData('Loja 1', 'produto198', 'SIM', 67, '', '23/02/2022'),
        createData('Loja 6', 'produto198', 'NÃO', '', 3.9, '13/04/2022'),
    ];
    
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Lojas</StyledTableCell>
                        <StyledTableCell align="right">Produtos</StyledTableCell>
                        <StyledTableCell align="right">Compra com tcoins</StyledTableCell>
                        <StyledTableCell align="right">Total em recompensa</StyledTableCell>
                        <StyledTableCell align="right">Preço total</StyledTableCell>
                        <StyledTableCell align="right">Data</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.loja}>
                            <StyledTableCell component="th" scope="row">
                                {row.loja}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.produtos}</StyledTableCell>
                            <StyledTableCell align="right">{row.compra_tcoins}</StyledTableCell>
                            <StyledTableCell align="right">{row.total_recompensas}</StyledTableCell>
                            <StyledTableCell align="right">{row.preco_total}</StyledTableCell>
                            <StyledTableCell align="right">{row.data_compra}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}