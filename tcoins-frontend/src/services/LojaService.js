import RequisicaoService from "./RequisicaoService";

const LojaService = {

    async getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = "") {
        const header = { nomeLoja, ramoLoja }
        const ret = await RequisicaoService.get(`loja?currentPage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    }
}

export default LojaService;