import React from 'react';
import './GerenciarProdutos.css';

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

function GerenciarProdutos() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checked, setChecked] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [isDisabledTwo, setIsDisabledTwo] = React.useState(true);
    

    const handleChange = () => {
        
        setChecked(!checked)
        if(checked === false) {
            setChecked(true)
            setIsDisabled(!isDisabled)
           
            console.log("Clicando" + checked)
        }else{
            setIsDisabled(!isDisabled)
            
        }
        
    };

    const handleChangeTwo = () => {
        
        setCheckedTwo(!checkedTwo)
        if(checkedTwo === false) {
            setCheckedTwo(true)
            setIsDisabledTwo(!isDisabledTwo)
           
            console.log("Clicando" + checkedTwo)
        }else{
            setIsDisabledTwo(!isDisabledTwo)
            
        }
        
    };
   

    return (

        <div>
            <div className='Nav'>
                <div>
                    <div className='Bloco1'>
                        <div className='ImagemLoja'>
                            <img className='ImagemLoja' src='https://static.wixstatic.com/media/604b9a_429b9c20260c453e9e28ffc7a238e77c~mv2.png/v1/fill/w_256,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Design%20sem%20nome%20(4).png' alt="Imagem da Loja"></img>
                        </div>
                        <div className='NomeLoja'>
                            <h1>Minuto Pão de Açúcar</h1>
                            <p>Alimentício</p>
                        </div>
                    </div>
                    <p className='DescricaoLoja'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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



            <div className="Listagem">

                <div className="ListaProdutos">
                    <img alt='foto-produto' className="FotoProdutos" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg"></img>
                    <div className="ConteudoProduto">
                        <div className="DetalheProduto">
                            <h2>Pão Francês</h2>
                            <p>Preço: TXXX tcoins</p>
                            <p>Recompensa: TXXX tcoins</p>
                        </div>
                        <div className='DescricaoProduto'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GerenciarProdutos;