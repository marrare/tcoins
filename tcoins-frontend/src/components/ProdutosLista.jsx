import React from 'react';
import '../pages/gerenciarProdutos/GerenciarProdutos.css';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ProdutoService from '../services/ProdutoService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


export default function ProdutosLista({ produto, lojaId }) {
    const sucesso = () => toast.success('Produto deletado com sucesso!', {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    //logica de imagem
    const imageDefault = 'https://cdn-icons-png.flaticon.com/512/2649/2649327.png';
    const imageCard = produto.imagem === null ? imageDefault : produto.imagem;

    const [nome, setNome] = useState(produto.nome)
    const [descricao, setDescricao] = useState(produto.descricao)
    const [recompensa, setRecompensa] = useState(produto.valorRecompensa)
    const [preco, setPreco] = useState(produto.precoTcoins)
    const [imagem, setImagem] = useState(imageDefault)

    const isRecompensaTcoins = produto.valorRecompensa === null ? false : true;
    const isPrecoTcoins = produto.valorRecompensa === null ? false : true;



    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checked, setChecked] = useState(isRecompensaTcoins);
    const [isDisabled, setIsDisabled] = useState(!isRecompensaTcoins);
    const [checkedTwo, setCheckedTwo] = useState(isPrecoTcoins);
    const [isDisabledTwo, setIsDisabledTwo] = useState(!isPrecoTcoins);


    const mudarNome = event => {
        setNome(event.target.value);
    };
    const mudarImagem = event => {
        setImagem(event.target.value);
    };
    const mudarDescricao = event => {
        setDescricao(event.target.value);
    };
    const mudarPreco = event => {
        setPreco(event.target.value);
    };
    const mudarRecompensa = event => {
        setRecompensa(event.target.value);
    };

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
    useEffect(() => {




    }, []);
    const dadosProduto = {
        nome: nome,
        descricao: descricao,
        precoTcoins: preco,
        valorRecompensa: recompensa,
        imagem: imagem
    }
    //onde tiver 1 trocar por produto id
    async function updateProduto() {
        const produtoAtualizado = await ProdutoService.updateProduto(1, lojaId, dadosProduto);
        if (produtoAtualizado.status == 200 || produtoAtualizado.status == 404) console.log('tudo ok');

    }
    async function deleteProduto() {
        const produtoAtualizado = await ProdutoService.deleteProduto(1);
        if (produtoAtualizado.status == 200 || produtoAtualizado.status == 404) sucesso();

    }



    return (


        <><Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                    Editar Produto
                </Typography>
                <TextField sx={{ marginTop: 2, marginBottom: 1 }}
                    autoComplete="given-name"
                    name="Nome"
                    required
                    value={nome}
                    fullWidth
                    id="firstName"
                    onChange={mudarNome}
                    label="Nome do produto"
                    autoFocus />

                <TextField sx={{ marginBottom: 1 }}
                    autoComplete="given-name"
                    name="Foto"
                    value={imagem}
                    onChange={mudarImagem}
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
                    onChange={mudarDescricao}
                    id="Descricao"
                    label="Descrição" />
                <fieldset className='Fieldset'>
                    <legend className='Legenda'>Recompensa em tcoins(TC)</legend>
                    <label class="switch">
                        <input type="checkbox" onClick={handleChange} checked={checked}
                        ></input>

                        <span class="slider round"></span>
                    </label>
                    <input type="number" className="InputNumber" placeholder='Valor da recompensa' value={recompensa} onChange={mudarRecompensa} disabled={isDisabled}></input>
                </fieldset>
                <fieldset className='Fieldset'>
                    <legend className='Legenda'>Comprar com tcoins(TC)</legend>
                    <label class="switch">
                        <input type="checkbox" onClick={handleChangeTwo} checked={checkedTwo}></input>
                        <span class="slider round"></span>
                    </label>
                    <input type="number" className="InputNumber" placeholder='Valor da compra' value={preco} onChange={mudarPreco} disabled={isDisabledTwo}></input>
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
                    onClick={updateProduto}
                >
                    ATUALIZAR
                </Button>
            </Box>
        </Modal>
            <ToastContainer />
            <div className="Listagem">

                <div className="ListaProdutos">
                    <img alt={produto.nome} className="FotoProdutos" src={imageDefault}></img>
                    <div className="ConteudoProduto">
                        <div className="InformacoesSuperior">
                            <div className="DetalheProduto">
                                <h2>{produto.nome}</h2>
                                <p>Preço: <span>{produto.precoTcoins} tcoins</span> </p>
                                <p>Recompensa: <span>{produto.valorRecompensa} tcoins</span> </p>
                            </div>
                            <div className="OpcoesProdutos">
                                <CreateIcon className="EditarProduto" fontSize='medium' onClick={handleOpen}></CreateIcon>
                                <DeleteIcon className="DeletarProduto" fontSize='medium' onClick={deleteProduto}></DeleteIcon>
                            </div>
                        </div>
                        <div className='DescricaoProduto'>
                            <p>{produto.descricao}</p>
                        </div>
                    </div>
                </div>
                {/* ))} */}
            </div></>
    );
}


