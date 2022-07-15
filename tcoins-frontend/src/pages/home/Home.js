import React from 'react';
import MultiActionAreaCard from '../../components/MultiActionAreaCard';
import BarraPesquisa from '../../components/BarraPesquisa'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LojaService from '../../services/LojaService';
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