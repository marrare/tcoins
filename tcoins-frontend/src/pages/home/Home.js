import React from 'react';
import LojaService from '../../services/LojaService';
import MultiActionAreaCard from '../../components/MultiActionAreaCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Navigate, useNavigate } from "react-router-dom";


// import CheckIcon from '@mui/icons-material/CheckIcon'

function Home() {

    //variaveis 
    const [ordem, setOrdem] = useState('');
    const [ramo, setRamo] = useState('');
    const [pesquisa, setPesquisa] = useState('');
    const [page, setPage] = React.useState(1);
    const [lojasHome, setLojas] = useState([]);
    const [ramos, setRamos] = useState([])
    const [user, setUser] = useState();

    // const ramos = [{ id: 1, nome: 'Alimentos' }, { id: 2, nome: 'Cosméticos' },
    // { id: 3, nome: 'Roupas' }, { id: 4, nome: 'Acessórios' }]

    //metodo para pegar valor da page
    const handleChange = (event, value) => {
        setPage(value);
    };
    const mudarRamo = (event, value) => {
        setRamo(value.props.value)

    }

    //pegar os dados por página
    useEffect(() => {

        getLojasPorPagina();
        console.log(page)
    }, [page])

    //pegar os dados com filtro e busca
    useEffect(() => {
        //tratar o filtro de ramo colocando depois
        getRamos()
        setPage(1)
        getLojas();
         

    }, [ramo, pesquisa])

    async function getLojas() {
        const lojas = await LojaService.getLojas(pesquisa, ramo, page, 4);
        if (lojas.status == 200 || lojas.status == 404) setLojas(lojas.data);

    }
    async function getRamos() {
        const ramos = await LojaService.getRamos();
        if (ramos.status == 200 || ramos.status == 404) setRamos(ramos.data);

    }
    async function getLojasPorPagina() {
        const lojas = await LojaService.getLojas('', '', page, 4);
        if (lojas.status == 200 || lojas.status == 404) setLojas(lojas.data);

    }
    


 

    return (

        <div className="App">
            <div className='ContainerHome'>
                <div className="Pesquisa">
                    <div className='Selects'>
                        <FormControl fullWidth variant="filled">
                            <InputLabel id="demo-simple-select-filled-label">Ramo: </InputLabel>

                            <Select
                                className="Ramo"
                                id="demo-simple-select-filled-label"
                                label="Ramo"
                                selectedValue={ramo}
                                accessibilityLabel="Selecione o ramo"
                                placeholder="Selecione "
                                /*ATUALIZAR COM OS DADOS DA API*/

                                onChange={mudarRamo}
                            >
                                <MenuItem value=''>
                                    <em>Nenhum</em>
                                </MenuItem>
                                {ramos.map((ramoEscolhido, i) => (
                                    <MenuItem value={ramoEscolhido.ramo}>{ramoEscolhido.ramo}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                        <FormControl fullWidth variant="filled">
                            <InputLabel id="demo-simple-select-filled-label">Ordernar por: </InputLabel>

                            <Select
                                className="Ordernar"
                                id="demo-simple-select-filled-label"
                                label="Ramo"
                                selectedValue={ordem}
                                onChange={(itemValue) => setOrdem(itemValue)}
                                placeholder="Selecione "
                            >
                                <MenuItem value="">
                                    <em>Nenhum</em>
                                </MenuItem>
                                <MenuItem value={'nome'}>Nome</MenuItem>
                                <MenuItem value={'proximas'}>Mais Próximas</MenuItem>

                                {/* <MenuItem value="">
                                <em>Nenhum</em>
                            </MenuItem>
                            
                            <MenuItem value={'Mais próximas'}>Mais próximas</MenuItem>
                            <MenuItem value={'Data de abertura'}>Data de abertura</MenuItem> */}
                            </Select>
                        </FormControl>
                    </div>

                    <Paper
                        className="BarraPesquisa"
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000 }}
                    >
                        <InputBase
                            type={Text}
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar por nome"
                            inputProps={{ 'aria-label': 'Buscar por nome' }}

                            onChange={e => setPesquisa(e.target.value.toLowerCase())}

                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="add">
                            <AddIcon />
                        </IconButton> */}
                    </Paper>
                </div>

                {/* <BarraPesquisa busca={setPesquisa}></BarraPesquisa> */}

                <div className="Card">
                    {lojasHome.map((dado, i) => (
                        <MultiActionAreaCard loja={dado} key={i} className="CardItem"></MultiActionAreaCard>

                    ))}
                </div>
                <div className='Paginacao'>
                    <Pagination color="secondary" count={10} page={page} onChange={handleChange} />
                </div>



            </div>


        </div >
    )
}
/*API: https://tcoinsapp.herokuapp.com/api/tcoins*/
export default Home;