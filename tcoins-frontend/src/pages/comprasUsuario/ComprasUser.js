import React from 'react';

import Paginacao from '../components/Paginacao'
import TableEstilizada from '../components/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import gerar from './gerarPdf';

import Button from '@mui/material/Button';

function ComprasUser() {

    const api = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
    });
    const [getdata, setData] = useState([]);
    const dadosHeader = ['Lojas', 'Produtos']


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
    

    const campo1 = [{ "id": "160030312", "nome": "Fazendinha", "regiao-imediata": "Macapá", "regiao-intermediaria": "Amapá", "": "", "": "" }];
    return (
        <div className="Container">
            {/* <PdfComponent></PdfComponent> */}
            <Button className="Botao" color="inherit" onClick={(e) => gerar(getdata)}>Baixar PDF</Button>
            <TableEstilizada dados={getdata} cabecalho={dadosHeader}></TableEstilizada>
            <Paginacao className="Paginacao"></Paginacao>
            

        </div>

    )
}

export default ComprasUser;