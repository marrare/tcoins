import React from 'react';

import TableEstilizada from '../../components/TableTcoins';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import gerar from './gerarPdf';

import Button from '@mui/material/Button';

function ComprasUser() {

    
    const [getdata, setData] = useState([]);
    const dadosHeader = ['Lojas', 'Produtos']


    
    // useEffect(() => {
    //     resgatarDados()
    // }, [])
    

    
    return (
        <div className="Container">
            {/* <PdfComponent></PdfComponent> */}
            {/* <Button className="Botao" color="inherit" onClick={(e) => gerar(getdata)}>Baixar PDF</Button> */}
            <TableEstilizada dados={getdata} cabecalho={dadosHeader}></TableEstilizada>
            {/* <Paginacao className="Paginacao"></Paginacao> */}
            

        </div>

    )
}

export default ComprasUser;