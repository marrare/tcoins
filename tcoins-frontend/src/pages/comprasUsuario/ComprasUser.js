import React from 'react';
import LojaService from '../../services/LojaService';
import ProdutoService from '../../services/ProdutoService';
import Modal from '@mui/material/Modal';
import TabelaUser from '../../components/TabelaUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import UsuarioService from '../../services/UsuarioService';
import ComprasService from '../../services/ComprasService';

const steps = ['Detalhes', 'Produtos'];
// import gerar from './gerarPdf';
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







export default function ComprasUser() {
    const [ramo, setRamo] = useState()
    const [ramos, setRamos] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [descricao, setDescricao] = useState('')
    const [checked, setChecked] = useState(false);
    const [tcoins, setTcoins] = useState();
    const [loja, setLoja] = useState();

    const addDescricao = event => {
        setDescricao(event.target.value);
    };
    const handleChange = () => {

        setChecked(!checked)


    };
    const mudarLoja = (event, value) => {
        setLoja(value.props.value)
        console.log(loja)
    }
    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };






    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [getdata, setData] = useState([]);
    const dadosHeader = ['Lojas', 'Produtos']
    let recompensa = 0
    let tcoinsTotal = 0
    const [quant, setQuant] = useState();
    const [user, setUser] = useState([]);
    const [userID, setId] = useState()
    const [lojasPorDono, setLojasPorDono] = useState([0]);
    const [produtosLista, setProdutos] = useState([]);

    // const addQuant = event => {
    //     setQuant(event.target.value);
    // };

    useEffect(() => {
        setInterval(() => {
            const idUsuario = localStorage.getItem('userId')
            setId(idUsuario)
            getLojasPorDono(idUsuario);

            // getUser(idUsuario)

        }, 1000);


    }, []);

    useEffect(() => {
        getProdutos(loja)

    }, [loja]);
    function buscarSaldo() {
        setTcoins(user.tcoins)
    }
    const setarRecompensa = (valor, preco, e) => {
        recompensa += valor
        tcoinsTotal += preco
        console.log(recompensa)

    }
    function comprar() {
        console.log(userID)
        adicionarTcoins(userID)
        resgatarRecompensas(userID)
        handleClose()


    }


    async function getProdutos(idLoja) {
        const produtos = await ProdutoService.getProdutosByLoja('', idLoja, '', 4);
        if (produtos.status == 200 || produtos.status == 404) setProdutos(produtos.data);
    }
    async function getLojasPorDono(id) {
        const lojasGerenciadas = await LojaService.getLojasByUser(id, '', '');
        if (lojasGerenciadas.status == 200 || lojasGerenciadas.status == 404) setLojasPorDono(lojasGerenciadas.data);

    }
    async function resgatarRecompensas(id) {
        const resgate = await ComprasService.resgatarTcoins(id, tcoinsTotal);
        if (resgate.status == 200 || resgate.status == 404);

    }
    async function adicionarTcoins(id) {
        const add = await ComprasService.addTcoins(id, recompensa);
        if (add.status == 200 || add.status == 404);

    }
    async function getUser(id) {
        const usuario = await UsuarioService.getUsuario(id).then((data) => {
            setUser(data.data)


        }).catch(() => {
            console.log('erro')
        })
    }

    // if () {

    // } else if (loja.status == 500) {








    return (
        <div className="Container">
            <Button className="Botao" onClick={handleOpen} color="inherit">Adicionar Compra</Button>
            {/* <PdfComponent></PdfComponent> */}
            {/* <Button className="Botao" color="inherit" onClick={(e) => gerar(getdata)}>Baixar PDF</Button> */}
            <TabelaUser ></TabelaUser>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            // if (isStepOptional(index)) {
                            //     labelProps.optional = (
                            //         <Typography variant="caption">Optional</Typography>
                            //     );
                            // }
                            // if (isStepSkipped(index)) {
                            //     stepProps.completed = false;
                            // }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === 0 ? (
                        <React.Fragment>
                            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                            <Select sx={{ marginBottom: 1, marginTop: 3 }}
                                autoComplete="given-name"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="Ramo"
                                placeholder="Loja:  "
                                required
                                fullWidth
                                value={loja}
                                label="Ramo"
                                onChange={mudarLoja}
                            >
                                <MenuItem value=''>
                                    <em>Nenhum</em>
                                </MenuItem>
                                {lojasPorDono.map((loja, i) => (
                                    <MenuItem value={loja.id}>{loja.nome}</MenuItem>
                                ))}
                            </Select>
                            <div className='BuscarCliente'>
                                <TextField
                                    sx={{ marginBottom: 5, height: 7 }}
                                    autoComplete="given-name"
                                    value={descricao}
                                    onChange={addDescricao}
                                    name="codigo"
                                    required
                                    fullWidth
                                    id="codigo"
                                    label="Código do cliente"
                                />
                                <Button sx={{ marginBottom: 5, height: 8 }} className='Botao BotaoBuscar'
                                    onClick={buscarSaldo}>
                                    Buscar
                                </Button>
                            </div>
                            <TextField
                                sx={{ marginBottom: 7, height: 7 }}
                                autoComplete="given-name"
                                value={descricao}
                                onChange={addDescricao}
                                name="nome"
                                required
                                fullWidth
                                id="nome"
                                label="Nome do cliente"
                            />
                            <TextField
                                sx={{ marginBottom: 8, height: 7 }}
                                autoComplete="given-name"
                                value={tcoins}

                                name="saldo"
                                required
                                fullWidth
                                id="saldo"
                                label="Saldo do cliente"
                            />
                            <legend className='Legenda'>Usar saldo ?</legend>
                            <label className="switch">
                                <input type="checkbox" onClick={handleChange} checked={checked}
                                ></input>

                                <span className="slider round"></span>
                            </label>

                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Voltar
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />

                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Confirmar' : 'Próximo'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                            {produtosLista.map((produto, i) => (
                                <div className="listaMenor">

                                    <div className="listaProduto">
                                        {/* <img className=""></img> */}
                                        <div className="ConteudoProduto">
                                            <div className="InformacoesSuperior">
                                                <div className="detalhe">
                                                    <h2>{produto.nome}</h2>


                                                </div>
                                                {/* <input type="number" className="quant" value={quant} onChange={addQuant}></input> */}

                                                <div className="OpcoesProdutos">

                                                    <AddIcon className="add" fontSize='medium' onClick={(e) => setarRecompensa(produto.valorRecompensa, produto.precoTcoins, e)}></AddIcon>
                                                </div>
                                                {/* onClick={(e) => deleteProdutoClicado(produto.id, e)} */}
                                            </div>

                                        </div>
                                    </div>
                                    {/* ))} */}
                                </div>

                            ))}



                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Voltar
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />

                                <Button onClick={comprar}>
                                    Confirmar
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </Modal>
            {/* <Paginacao className="Paginacao"></Paginacao> */}


        </div>

    )
}

