import React from 'react';
import './GerenciarProdutos.css';
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
    //Trazendo os produtos e a loja
    const [produtosLista, setProdutos] = useState([]);
    const [lojaDetalhe, setLoja] = useState([0]);
    //puxando o primeiro array
    const lojaDetalhada = lojaDetalhe[0]

    //logica de imagem
    const imageDefault = 'https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg';
    const imageCard = lojaDetalhada.imagem === null ? imageDefault : lojaDetalhada.imagem;
    //coordenadas para o maps
    const latitude = lojaDetalhada.latitude;
    const longitude = lojaDetalhada.longitude;

    //logicas para o modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [isDisabledTwo, setIsDisabledTwo] = useState(true);


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




    //pegar os dados por página
    useEffect(() => {

        getLoja();
        getProdutos();


    }, [])


    async function getLoja() {
        const loja = await LojaService.getLojas(nome, '', '', '');
        if (loja.status == 200 || loja.status == 404) setLoja(loja.data);

    }
    async function getProdutos() {
        const produtos = await LojaService.getProdutosByLoja('', lojaDetalhada.lojaId, '', 4);
        if (produtos.status == 200 || produtos.status == 404) setProdutos(produtos.data);
    }





    return (

        <div>
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
                {/* <div className='Localizacao map'>
                    <MapView latitude={lojaDetalhada.latitude} longitude={lojaDetalhada.longitude}></MapView>
                </div> */}
            </div>

            <Paper
                className="BarraPesquisa"
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000 }}
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
                        fullWidth
                        id="firstName"
                        label="Nome"
                        autoFocus
                    />
                    <TextField sx={{ marginBottom: 1 }}
                        autoComplete="given-name"
                        name="Foto"
                        required
                        fullWidth
                        id="Foto"
                        label="Foto"
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
                    <fieldset className='Fieldset'>
                        <legend className='Legenda'>Recompensa em tcoins(TC)</legend>
                        <label class="switch">
                            <input type="checkbox" onClick={handleChange} checked={checked}
                             ></input>
                            
                            <span class="slider round"></span>
                        </label>
                        <input type="number" className="InputNumber" placeholder='Valor da recompensa' disabled={isDisabled} ></input>
                    </fieldset>
                    <fieldset className='Fieldset'>
                        <legend className='Legenda'>Comprar com tcoins(TC)</legend>
                        <label class="switch">
                            <input type="checkbox" onClick={handleChangeTwo} checked={checkedTwo}></input>
                            <span class="slider round"></span>
                        </label>
                        <input type="number" className="InputNumber" placeholder='Valor da recompensa' disabled={isDisabledTwo}></input>
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
                    >
                        CONFIRMAR
                    </Button>
                </Box>
            </Modal>


            {produtosLista.map((produto, i) => (
                
                <div className="Listagem">

                    <div className="ListaProdutos">
                        <img alt={produto.nome} className="FotoProdutos" src={produto.imagem}></img>
                        <div className="ConteudoProduto">
                            <div className="DetalheProduto">
                                <h2>{produto.nome}</h2>
                                <p>Preço: {produto.precoTcoins} tcoins</p>
                                <p>Recompensa: {produto.valorRecompensa} tcoins</p>
                            </div>
                            <div className='DescricaoProduto'>
                                <p>{produto.descricao}</p>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            ))}

        </div>

    )
}

export default GerenciarProdutos;