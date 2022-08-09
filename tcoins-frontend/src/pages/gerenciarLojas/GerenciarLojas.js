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
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import gerar from '../gerarPdf';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};


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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [ramo, setRamo] = React.useState('');

    const handleChange = (event, value) => {
        console.log(value.props.value)
        setRamo(value.props.value)

    };

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
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="add" onClick={handleOpen}>
                        <AddIcon />
                    </IconButton>
                </Paper>
                <Button className="Botao" color="inherit" onClick={(e) => gerar(lojasPorDono)}>Baixar PDF</Button>
            </div>

            <TableEstilizada lojas={lojasPorDono}></TableEstilizada>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                        Adicionar Loja
                    </Typography>
                    <TextField sx={{ marginTop: 2, marginBottom: 1 }}
                        autoComplete="given-name"
                        name="Nome"
                        required
                        fullWidth
                        id="firstName"
                        label="Nome"
                        autoFocus
                    />
                    <InputLabel id="demo-simple-select-label">Ramo</InputLabel>
                    <Select sx={{ marginBottom: 1 }}
                        autoComplete="given-name"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="Ramo"
                        required
                        fullWidth
                        value={ramo}
                        label="Ramo"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <InputLabel id="demo-simple-select-label">Foto</InputLabel>
                    <TextField sx={{ marginBottom: 1 }}
                        name="upload-photo"
                        type="file"
                        fullWidth
                    />
                    <TextField
                        sx={{ height: 8, marginBottom: 5 }}
                        autoComplete="given-name"
                        name="Descricao"
                        required
                        fullWidth
                        id="Descricao"
                        label="Descrição"
                    />
                    <Button
                        sx={{ marginBottom: 1, backgroundColor: 'red', marginTop: 2 }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleClose}
                    >
                        CANCELAR
                    </Button>
                    <Button
                        sx={{ backgroundColor: 'green' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        CONFIRMAR
                    </Button>
                </Box>
            </Modal>




        </div>
    );
}
