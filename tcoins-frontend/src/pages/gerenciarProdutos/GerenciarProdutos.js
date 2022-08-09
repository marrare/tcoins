import React from 'react';
import './GerenciarProdutos.css';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import LojaService from '../../services/LojaService';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MapView from '../../maps';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ProdutoService from '../../services/ProdutoService';
import ProdutosLista from '../../components/ProdutosLista'
import { ToastContainer, toast } from 'react-toastify';
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


function GerenciarProdutos() {
    //nome da loja
    const { nome } = useParams();
    const { lojaId } = useParams();
    //Trazendo os produtos e a loja
    const [produtosLista, setProdutos] = useState([]);
    const [lojaDetalhe, setLoja] = useState([0]);
    //puxando o primeiro array
    const lojaDetalhada = lojaDetalhe[0]

    //logica de imagem
    const imageDefault = "data:image/png;base64,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";
    const imageCard = lojaDetalhada.imagem === null ? imageDefault : lojaDetalhada.imagem;

    //coordenadas para o maps
    const latitude = lojaDetalhada.latitude;
    const longitude = lojaDetalhada.longitude;

    //TOASTS
    const sucesso = () => toast.success('Produto cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const erro = () => toast.error('Erro ao salvar novo produto!', {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    console.log(lojaId)

    //dados do produto
    const [nomeProduto, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [recompensa, setRecompensa] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')

    //logicas para o modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [isDisabledTwo, setIsDisabledTwo] = useState(true);


    const addNome = event => {
        setNome(event.target.value);
    };
    const addImagem = event => {
        setImagem(event.target.value);
    };
    const addDescricao = event => {
        setDescricao(event.target.value);
    };
    const addPreco = event => {
        setPreco(event.target.value);
    };
    const addRecompensa = event => {
        setRecompensa(event.target.value);
    };

    const limparCampos = () => {
        setNome('')
        setDescricao('')
        setPreco('')
        setRecompensa('')
        setImagem('')
        handleChange()
        handleChangeTwo()
    }
    const handleChange = () => {

        setChecked(!checked)
        if (checked === false) {
            setChecked(true)
            setIsDisabled(!isDisabled)

            console.log("Clicando" + checked)
        } else {
            setIsDisabled(!isDisabled)

        }

    };

    const handleChangeTwo = () => {

        setCheckedTwo(!checkedTwo)
        if (checkedTwo === false) {
            setCheckedTwo(true)
            setIsDisabledTwo(!isDisabledTwo)

            console.log("Clicando" + checkedTwo)
        } else {
            setIsDisabledTwo(!isDisabledTwo)

        }

    };
    const dadosProduto = {
        nome: nomeProduto,
        descricao: descricao,
        precoTcoins: preco,
        valorRecompensa: recompensa,
        imagem: imagem
    }


    useEffect(() => {
        getProdutos();
    }, [produtosLista])

    //pegar os dados por página
    useEffect(() => {

        getLoja();
        getProdutos();


    }, [])
    //onde tiver 1 trocar por produto id
    async function createProdut() {
        const produtoAtualizado = await ProdutoService.createProduto(lojaId, dadosProduto);
        if (produtoAtualizado.status == 200 || produtoAtualizado.status == 404) {
            handleClose()
            sucesso()
            limparCampos()

        } else if (produtoAtualizado.status == 500) {
            console.log('erro ao salvar')
            erro()
        };

    }

    //reformular pra loja/info
    async function getLoja() {
        const loja = await LojaService.getLojas(nome, '', '', '');
        if (loja.status == 200 || loja.status == 404) setLoja(loja.data);

    }

    async function getProdutos() {
        const produtos = await ProdutoService.getProdutosByLoja('', lojaId, '', '');
        if (produtos.status == 200 || produtos.status == 404) setProdutos(produtos.data);
    }


    return (

        <div className='Container'>
            <div className='Nav'>
                <div>
                    <div className='Bloco1'>
                        <div className='ImagemLoja'>
                            <img className='ImagemLoja' src={imageCard} alt="Imagem da Loja"></img>
                        </div>
                        <div className='NomeLoja'>
                            <h1>{nome}</h1>
                            <p>{lojaDetalhada.ramo}</p>
                        </div>
                    </div>
                    <p className='DescricaoLoja'>{lojaDetalhada.descricao}</p>
                </div>
                <div className='Localizacao map'>
                    <MapView lat={latitude} lng={longitude}></MapView>
                </div>
            </div>

            <Paper
                className="BarraPesquisa"
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
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

            <div className="Checkbox">
                <input type='checkbox'></input>
                <label>Apenas produtos que permitem comprar com tcoins (TC)</label>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                        Adicionar Produto
                    </Typography>
                    <TextField sx={{ marginTop: 2, marginBottom: 1 }}
                        autoComplete="given-name"
                        name="Nome"
                        required
                        value={nomeProduto}
                        fullWidth
                        id="firstName"
                        onChange={addNome}
                        label="Nome do produto"
                        autoFocus />

                    <TextField sx={{ marginBottom: 1 }}
                        autoComplete="given-name"
                        name="Foto"
                        value={imagem}
                        onChange={addImagem}
                        required
                        fullWidth
                        id="Foto"
                        label="URL da imagem" />
                    <TextField
                        sx={{ height: 8, marginBottom: 5 }}
                        autoComplete="given-name"
                        name="Descricao"
                        value={descricao}
                        required
                        fullWidth
                        onChange={addDescricao}
                        id="Descricao"
                        label="Descrição" />
                    <fieldset className='Fieldset'>
                        <legend className='Legenda'>Recompensa em tcoins(TC)</legend>
                        <label className="switch">
                            <input type="checkbox" onClick={handleChange} checked={checked}
                            ></input>

                            <span className="slider round"></span>
                        </label>
                        <input type="number" className="InputNumber" placeholder='Valor da recompensa' value={recompensa} onChange={addRecompensa} disabled={isDisabled}></input>
                    </fieldset>
                    <fieldset className='Fieldset'>
                        <legend className='Legenda'>Comprar com tcoins(TC)</legend>
                        <label className="switch">
                            <input type="checkbox" onClick={handleChangeTwo} checked={checkedTwo}></input>
                            <span className="slider round"></span>
                        </label>
                        <input type="number" className="InputNumber" placeholder='Valor da compra' value={preco} onChange={addPreco} disabled={isDisabledTwo}></input>
                    </fieldset>

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
                        onClick={createProdut}
                    >
                        SALVAR
                    </Button>
                </Box>
            </Modal>
            <ToastContainer />


            {produtosLista.map((produto, i) => (
                <ProdutosLista produto={produto} lojaId={lojaId}></ProdutosLista>

            ))}

        </div>

    )
}

export default GerenciarProdutos;