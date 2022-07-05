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
// import CheckIcon from '@mui/icons-material/CheckIcon'

export default function BarraPesquisa({ api, setData, resgatarDados }) {
    /*ATUALIZAR COM OS DADOS DA API*/
    // let [ramo, setRamo] = React.useState("");
    // let [placeToRender, setPlace] = useState([]);
    // const [dados, setDados] = useState([]);
    // const [logged, setLogged] = useState();

    // function resgatarDados() {
    //     api.get('lojaRamos')
    //         .then(function (response) {
    //             setDados(response.data);
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    // useEffect(() => {
    //     resgatarDados()
    // }, [])

    // let lojaToRender;
    // if (ramo == "") {
    //     lojaToRender = dados;
    // } else {
    //     lojaToRender = dados.filter(function (loja) {
    //         return loja.ramo == ramo;
    //     });
    // }
    // const [age, setAge] = React.useState('');

    //const handleChange = (event) => {
    // setRamo(event.target.value);
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
                            // selectedValue={ramo}
                            accessibilityLabel="Selecione o ramo"
                            placeholder="Selecione "
                        /*ATUALIZAR COM OS DADOS DA API*/
                        // _selectedItem={{
                        //     bg: "teal.600",
                        //     endIcon: <CheckIcon size="5" />,
                        // }}
                        // mt={1}
                        //   onValueChange={(itemValue) => setRamo(itemValue)}
                        >
                            {/* {ramos.map((ramo, i) => (
              <Select.Item label={ramo.nome} value={ramo.nome} />
          ))} */}

                        </Select>
                    </FormControl>
                    <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Ordernar por: </InputLabel>

                        <Select
                            className="Ordernar"
                            id="demo-simple-select-filled-label"
                            label="Ramo"
                            // selectedValue={ramo}
                            accessibilityLabel="Selecione o ramo"
                            placeholder="Selecione "
                        >
                            <MenuItem value="">
                                <em>Nenhum</em>
                            </MenuItem>
                            <MenuItem value={10}>Nome</MenuItem>
                            <MenuItem value={20}>Localização</MenuItem>
                            <MenuItem value={30}>Data de abertura</MenuItem>
                        </Select>
                    </FormControl>
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
                        onChangeText={(text) => {
                            if (text.trim().length >= 2) {
                                api.get(`estados/PE/distritos${text}`)
                                    .then(function (response) {
                                        setData(response.data);
                                    })
                                    .catch(function (error) {
                                        console.log("erro ao buscar");
                                    });
                            } else {
                                resgatarDados();
                            }
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
