import React from 'react';

import TabelaUser from '../components/TabelaUser';
import Paginacao from '../components/Paginacao'

function ComprasUser() {

    return (
        <div className="Container">

            <TabelaUser className="Tabela"></TabelaUser>
            <Paginacao className="Paginacao"></Paginacao>


        </div>
        
    )
}

export default ComprasUser;