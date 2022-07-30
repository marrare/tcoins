import React from 'react';
import './GerenciarProdutos.css';
import useState from 'react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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