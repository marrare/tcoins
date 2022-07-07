import RequisicaoService from "./RequisicaoService";

const LojaService = {

    getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = ""){
        const header = { nomeLoja, ramoLoja }
        RequisicaoService.get(`loja?currentpage=${currentpage}&pageSize=${pageSize}`, header);
    },

/*     postLojas(nomeLoja = "", ramoLoja = ""){
        const header = { nomeLoja, ramoLoja }
        RequisicaoService.post( "loja", header);
    } */

    postLojas(donoId = "", ramoId = "", nome = "",descricao = "", latitude = "", longitude = "", imagem = ""){
        const header = { donoId, ramoId, nome, descricao, latitude, longitude, imagem }
        RequisicaoService.post( "loja", header);
    },

    deleteLojas(lojaId = "") {
        const header = { lojaId }
        RequisicaoService.delete( "loja", header);
    }
}

export default LojaService;