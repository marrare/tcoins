import RequisicaoService from "./RequisicaoService";

const LojaService = {

    async getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = "") {
        const header = { nomeLoja, ramoLoja }
        const ret = await RequisicaoService.get(`loja?currentpage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    }
}

export default LojaService;