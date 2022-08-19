import React from 'react';
import PlanoService from '../../services/PlanoService';


function atualizaPlano() {

        const planoAtualizado = PlanoService.atualizarPlano(parseInt(localStorage.getItem('userId')), parseInt(localStorage.getItem('idPlano'))).then((data)=>{
            window.location.replace('http://localhost:3001/planos')});
        if (planoAtualizado.status == 200 || planoAtualizado.status == 404) {
            console.log("Plano atualizado com sucesso")

        } else {
            console.log("Erro ao atualizar plano")
            
        }
        



      return(<></>)
}

export default atualizaPlano;