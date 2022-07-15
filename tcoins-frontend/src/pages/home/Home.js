import React from 'react';
import LojaService from '../../services/LojaService';
import MultiActionAreaCard from '../../components/MultiActionAreaCard';
import BarraPesquisa from '../../components/BarraPesquisa'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

function Home({ props }) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [lojasHome, setLojas] = useState([]);

    useEffect(() => {
        getLojas();
        // console.log(page)
        // console.log(getdata)
    }, [page])

    async function getLojas() {
        const lojas = await LojaService.getLojas('', '', page, 4);
        if (lojas.status == 200 || lojas.status == 404) setLojas(lojas.data);
    }


    /* const api = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
    }); */
    const [getdata, setData] = useState([]);


    function resgatarDados() {
        LojaService.getLojas('nomeLoja')
            .then(function (response) {
                setData(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        resgatarDados()
    }, [])

    return (

        <div className="App">
            <div className='ContainerHome'>
                <BarraPesquisa setLojas={setLojas}></BarraPesquisa>

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