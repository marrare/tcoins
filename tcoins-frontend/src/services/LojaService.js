import RequisicaoService from "./RequisicaoService";

const LojaService = {

    getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = ""){
        const header = { nomeLoja, ramoLoja }
        RequisicaoService.get(`loja?currentpage=${currentpage}&pageSize=${pageSize}`, header);
    }
}

export default LojaService;