import React from 'react';
import './GerenciarProdutos.css';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';

function GerenciarProdutos({ route, navigate }) {

    const [getProdutos, setProdutos] = useState([]);
    const [getNome, setNome] = useState('');
    const [getDetalhe, setDetalhe] = useState('');
    const [getImagem, setImagem] = useState('');
    const [getId, setId] = useState('');
    const [getRamo, setRamo] = useState('')

    // useEffect(() => {
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

    return (

        <div className='Container'>
            <div className='Nav'>
                <div>
                    <div className='Bloco1'>
                        <div className='ImagemLoja'>
                            {/* <img className='ImagemLoja' src={} alt="Imagem da Loja"></img> */}
                        </div>
                        <div className='NomeLoja'>
                            <h1>teste</h1>
                            <p>teste</p>
                        </div>
                    </div>
                    <p className='DescricaoLoja'>teste</p>
                </div>
                <div className='Localizacao'>
                    <img className='Localizacao' src='https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/images/1a28172b38b885fb9b3a335e0e998025' alt="Localização da Loja"></img>
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
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="add">
                    <AddIcon />
                </IconButton>
            </Paper>

            <div className="Checkbox">
                <input type='checkbox'></input>
                <label>Apenas produtos que permitem comprar com tcoins (TC)</label>
            </div>



            <div className="Listagem">
                {/* {getProdutos.map((produto, i) => ( */}
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