import RequisicaoService from "./RequisicaoService";

const LojaService = {

    async getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = "") {
        const header = { nomeLoja, ramoLoja }
        const ret = await RequisicaoService.get(`loja?currentPage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    },
    async getRamos() {
        const ret = await RequisicaoService.get('ramos');
        return ret;
    },
    async getLojasByUser(userId = "", page = "", pageSize = "") {
        const header = { userId }
        const ret = await RequisicaoService.get(`loja/usuario?page=${page}&pageSize=${pageSize}`, header);
        return ret;
    }
}


export default LojaService;