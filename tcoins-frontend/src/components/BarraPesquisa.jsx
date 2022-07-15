import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LojaService from '../services/LojaService';
// import CheckIcon from '@mui/icons-material/CheckIcon'

export default function BarraPesquisa(props) {
    // const api = axios.create({
    //     baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
    // });
    const [pesquisaHome, setPesquisaHome] = useState('');
    const [ordem, setOrdem] = useState('');
    const [dados, setDados] = useState([]);
    const [ramo, setRamo] = useState('');

    //Lógica de Filtro de Ramos
    var array = ['a', 'b', 'b', 'c', 'c'];
    var unique = [...new Set(array)];

    //Lógica do Filtro de Ordem
    // var ordemTeste = [{ id: 1, tipo: '' }, { id: 2, tipo: 'Nome' }, { id: 3, tipo: 'Mais próximas' }, { id: 3, tipo: 'Data de abertura' }];
    // console.log(ordemTeste.sort())

    let lojasPorOrdem;
    if (ordem === "") {
        lojasPorOrdem = dados;
    } else if (ordem === 'nome') {
        lojasPorOrdem = setDados(dados.sort());
        console.log('ordenando por nome')
    } else if (ordem === 'próximas') {
        // fazer lógica
    }
    //fazer outro else if dps


    
    useEffect(() => {
        LojaService.getLojas(pesquisaHome, ramo, '', '');
    }, [pesquisaHome])

    const ramos = [{ id: 1, nome: 'Alimentício' }, { id: 2, nome: 'Restaurante' }]
    // };

    return (
        <Box sx={{ minWidth: 120 }}>
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

                            onValueChange={(itemValue) => setRamo(itemValue)}
                        >
                            <MenuItem value="">
                                <em>Nenhum</em>
                            </MenuItem>
                            {ramos.map((ramo, i) => (
                                <MenuItem value={ramo.id}>{ramo.nome}</MenuItem>
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
                            onValueChange={(itemValue) => setOrdem(itemValue)}
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
                        onChange={
                            (event) => {
                                const text = event.target.value.toLowerCase()
                                console.log(text)

                                setPesquisaHome(LojaService.getLojas(text, ramo, '1', 10));
                                // api.get('estados/PE/distritos/' + text)
                                //     .then(function (response) {
                                //         setSearch(response.data);
                                //     })
                                //     .catch(function (error) {
                                //         console.log("erro ao buscar");
                                //     });

                                //else {
                                //     resgatarDados();
                                // }
                            }}


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

        </Box>
    );
}
