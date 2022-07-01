import React from 'react';
import MultiActionAreaCard from '../components/MultiActionAreaCard';
import BarraPesquisa from '../components/BarraPesquisa'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const api = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
    });
    const [getdata, setData] = useState([]);


    function resgatarDados() {
        api.get('estados/PE/distritos')
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
                <BarraPesquisa api={api} setData={setData} resgatarDados={resgatarDados}></BarraPesquisa>

                <div className="Card">
                    {getdata.map((dado, i) => (
                        <MultiActionAreaCard data={dado} className="CardItem"></MultiActionAreaCard>

                    ))}
                </div>


            </div>


        </div>
    )
}
/*API: https://tcoinsapp.herokuapp.com/api/tcoins*/
export default Home;