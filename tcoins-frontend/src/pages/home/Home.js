import React from 'react';
import LojaService from '../../services/LojaService';
import MultiActionAreaCard from '../../components/MultiActionAreaCard';
import BarraPesquisa from '../../components/BarraPesquisa';
import { useState, useEffect } from 'react';

function Home() {

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
                <BarraPesquisa api={LojaService} setData={setData} resgatarDados={resgatarDados}></BarraPesquisa>

                <div className="Card">
                    {getdata.map((dado, i) => (
                        <MultiActionAreaCard data={dado} className="CardItem"></MultiActionAreaCard>

                    ))}
                </div>


            </div>


        </div>

/*         <div className="App">

            <div className="Card">
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
            </div>

            <div className="Card">
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
            </div>

        </div> */
    )
}
/*API: https://tcoinsapp.herokuapp.com/api/tcoins*/
export default Home;