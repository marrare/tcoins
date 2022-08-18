import * as React from 'react';
import './GerenciarLojas.css';
import LojaService from '../../services/LojaService';

import Toasts from '../../components/Toasts';
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
import { ToastContainer } from 'react-toastify';

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
    const [pesquisa, setPesquisa] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [ramos, setRamos] = useState([])
    const { userId } = useParams();
    const [lojasPorDono, setLojasPorDono] = useState([0]);
    //puxando o primeiro array
    const lojaTabela = [...lojasPorDono].reverse()


    //dados da loja
    const [nomeLoja, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [ramo, setRamo] = useState()
    const [imagem, setImagem] = useState()
    const [latitude, setLatitude] = useState(-8.1184208)
    const [longitude, setLongitude] = useState(-35.0335069)

    const dadosLoja = {
        nome: nomeLoja,
        descricao: descricao,
        latitude: latitude,
        longitude: longitude,
        imagem: imagem
    }

    //adicionar loja
    const mudarRamo = (event, value) => {
        setRamo(value.props.value)
    }
    const addNome = event => {
        setNome(event.target.value);
    };
    const addImagem = event => {

        const file = event.target.files[0].file;
        setImagem(file);
    };
    const addDescricao = event => {
        setDescricao(event.target.value);
    };


    const limparCampos = () => {
        setNome('')
        setDescricao('')
        setImagem('')
        setRamo('')

    }
    useEffect(() => {
        getLojasPorDono();

    }, [lojasPorDono])
    //pegar os dados
    useEffect(() => {
        getRamos()
        getLojasPorDono();

    }, [])


    async function getLojasPorDono() {
        const lojasGerenciadas = await LojaService.getLojasByUser(userId, '', '');
        if (lojasGerenciadas.status == 200 || lojasGerenciadas.status == 404) setLojasPorDono(lojasGerenciadas.data);

    }
    async function getRamos() {
        const ramos = await LojaService.getRamos();
        if (ramos.status == 200 || ramos.status == 404) setRamos(ramos.data);

    }
    async function createLoja() {
        const loja = await LojaService.createLoja(userId, ramo, dadosLoja);
        console.log(loja.status)
        if (loja.status == 200 || loja.status == 404 || loja.status === 201) {
            debugger
            handleClose()
            Toasts.sucesso('Loja cadastrada com sucesso!')
            limparCampos()

        } else if (loja.status == 500) {
            Toasts.erro('Erro ao cadastrar loja!')
        };

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
                        onChange={e => setPesquisa(e.target.value.toLowerCase())}
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

            <TableEstilizada lojas={lojaTabela}></TableEstilizada>

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
                        value={nomeLoja}
                        onChange={addNome}
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
                        placeholder="Selecione "
                        required
                        fullWidth
                        value={ramo}
                        label="Ramo"
                        onChange={mudarRamo}
                    >
                        <MenuItem value=''>
                            <em>Nenhum</em>
                        </MenuItem>
                        {ramos.map((ramoEscolhido, i) => (
                            <MenuItem value={ramoEscolhido.id}>{ramoEscolhido.ramo}</MenuItem>
                        ))}
                    </Select>
                    <InputLabel id="demo-simple-select-label">Foto</InputLabel>
                    <TextField sx={{ marginBottom: 1 }}
                        name="upload-photo"
                        type="file"
                        fullWidth
                        value={imagem}
                        onClick={addImagem}
                    />
                    <TextField
                        sx={{ height: 8, marginBottom: 5 }}
                        autoComplete="given-name"
                        value={descricao}
                        onChange={addDescricao}
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
                        onClick={createLoja}
                    >
                        CONFIRMAR
                    </Button>
                </Box>
            </Modal>
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
    );
}
