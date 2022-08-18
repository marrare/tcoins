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
import InputLabel from '@mui/material/InputLabel';

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
    //console.log(produto)
    const sucesso = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const erro = (message) => toast.error(message, {
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
    const imageCard = produto.imagem === null || produto.imagem == '' || produto.imagem == undefined ? imageDefault : produto.imagem;

    const [produtosLista, setProdutos] = useState([]);
    const [nome, setNome] = useState(produto.nome)
    const [descricao, setDescricao] = useState(produto.descricao)
    const [recompensa, setRecompensa] = useState(produto.valorRecompensa)
    const [preco, setPreco] = useState(produto.precoTcoins)
    const [imagem, setImagem] = useState(produto.imagem)

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
        console.log(event.target.files[0]);

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
    const deleteProdutoClicado = (id, e) => {
        console.log(id);
        deleteProduto(id)
    }
    const editProdutoClicado = (id, e) => {
        console.log(id);
        updateProduto(id)
    }


    const dadosProduto = {
        id: produto.id,
        nome: nome,
        descricao: descricao,
        precoTcoins: preco,
        imagem: imagem,
        valorRecompensa: recompensa,
    }

    async function getProdutos() {
        const produtos = await ProdutoService.getProdutosByLoja('', lojaId, '', '');
        if (produtos.status == 200 || produtos.status == 404) setProdutos(produtos.data);
    }
    //onde tiver 1 trocar por produto id
    async function updateProduto(id) {
        const produtoAtualizado = await ProdutoService.updateProduto(id, lojaId, dadosProduto);
        if (produtoAtualizado.status == 200 || produtoAtualizado.status == 404) {
            // childToParent(true)
            handleClose()

            sucesso('Produto atualizado com sucesso!')

        } else {
            handleClose()
            erro('Erro ao atualizar produto!')
        };

    }
    async function deleteProduto(id) {
        const produtoAtualizado = await ProdutoService.deleteProduto(id);
        if (produtoAtualizado.status == 200 || produtoAtualizado.status == 404) {

            sucesso('Produto deletado com sucesso!')
        } else {
            erro('Erro ao deletar produto!')
        };

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
                <TextField sx={{ marginBottom: 1 }}
                    type="hidden"
                    value={produto.id}
                />
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
                <InputLabel id="demo-simple-select-label">Foto</InputLabel>
                <TextField sx={{ marginBottom: 1 }}

                    type="file"
                    fullWidth
                    value={imagem}
                    onChange={mudarImagem}
                    required
                    id="Foto"

                />
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
                    onClick={(e) => editProdutoClicado(produto.id, e)}
                >
                    ATUALIZAR
                </Button>
            </Box>
        </Modal>
            <ToastContainer />
            <div className="Listagem">

                <div className="ListaProdutos">
                    <img alt={produto.nome} className="FotoProdutos" src={produto.imagem}></img>
                    <div className="ConteudoProduto">
                        <div className="InformacoesSuperior">
                            <div className="DetalheProduto">
                                <h2>{produto.nome}</h2>
                                <p>Preço: <span>{produto.precoTcoins} tcoins</span> </p>
                                <p>Recompensa: <span>{produto.valorRecompensa} tcoins</span> </p>
                            </div>
                            <div className="OpcoesProdutos">
                                <CreateIcon className="EditarProduto" fontSize='medium' onClick={handleOpen}></CreateIcon>
                                <DeleteIcon className="DeletarProduto" fontSize='medium' onClick={(e) => deleteProdutoClicado(produto.id, e)}></DeleteIcon>
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


