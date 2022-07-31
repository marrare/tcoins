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


function GerenciarProdutos() {
    const { nome } = useParams();
    const [lojaDetalhe, setLoja] = useState([0]);
    const lojaDetalhada = lojaDetalhe[0]
    const imageDefault = 'https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg';
    const imageCard = lojaDetalhada.imagem === null ? imageDefault : lojaDetalhada.imagem;







    // const ramos = [{ id: 1, nome: 'Alimentos' }, { id: 2, nome: 'Cosméticos' },
    // { id: 3, nome: 'Roupas' }, { id: 4, nome: 'Acessórios' }]
    // const [getRamo, setRamo] = useState('')




    // const [getProdutos, setProdutos] = useState([]);
    // const [getNome, setNome] = useState('');
    // const [getDetalhe, setDetalhe] = useState('');
    // const [getImagem, setImagem] = useState('');
    // const [getId, setId] = useState('');

    //pegar os dados por página
    useEffect(() => {

        getLoja();

    }, [])

    // setLoja(lojaTeste)
    // const ramoLista = ramos.filter(function (ramo) {
    //     return ramo.id == lojaDetalhe.ramoId;
    // });
    // setRamo(ramoLista.nome)



    // const ramoNomeTeste = ramos.map((ramo, i) => (
    //     ramo.id === loja.ramoId ? ramo.nome : ramo.nome
    // )
    // )


    // console.log(ramoNome)
    async function getLoja() {
        const loja = await LojaService.getLojas(nome, '', '', '');
        if (loja.status == 200 || loja.status == 404) setLoja(loja.data);

    }

    // useEffect(() => {
    // console.log(nome)
    // console.log(lojaDetalhe)
    //     if (route.params) {
    //         const { nome } = route.params
    //         const { detalhe } = route.params
    //         const { imagem } = route.params
    //         const { id } = route.params
    //         const { ramo } = route.params

    //         console.log(route.params)
    //         //             const { alterar } =  route.params

    //         setNome(nome)
    //         setDetalhe(detalhe)
    //         setImagem(imagem)
    //         setId(id)
    //         setRamo(ramo)
    //         console.log(getNome)
    //         //             setAlterar(alterar)
    //     }

    // }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <MapView latitude={lojaDetalhada.latitude} longitude={lojaDetalhada.longitude}></MapView>
                </div>
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
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                        </label>
                        <input type="number" className="InputNumber" placeholder='Valor da recompensa'></input>
                    </fieldset>
                    <fieldset className='Fieldset'>
                        <legend className='Legenda'>Comprar com tcoins(TC)</legend>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                        </label>
                        <input type="number" className="InputNumber" placeholder='Valor da recompensa'></input>
                    </fieldset>

                    <Button
                        sx={{ marginBottom: 1, backgroundColor: 'red', marginTop: 2 }}
                        type="submit"
                        fullWidth
                        variant="contained"
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



            <div className="Listagem">

                <div className="ListaProdutos">
                    <img alt='foto-produto' className="FotoProdutos" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg"></img>
                    <div className="ConteudoProduto">
                        <div className="DetalheProduto">
                            <h2>Pãozin</h2>
                            <p>Preço: TXXX tcoins</p>
                            <p>Recompensa: TXXX tcoins</p>
                        </div>
                        <div className='DescricaoProduto'>
                            <p>lOREM LOREM LOREM</p>
                        </div>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </div>

    )
}

export default GerenciarProdutos;