import RequisicaoService from "./RequisicaoService";

const LojaService = {

    async getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = "") {
        const header = { nomeLoja, ramoLoja }
        const ret = await RequisicaoService.get(`loja?currentPage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    },
    async getLoja(lojaId) {
        const header = { lojaId }
        const ret = await RequisicaoService.get('loja/info', header);
        return ret;
    },
    async getRamos() {
        const ret = await RequisicaoService.get('ramos');
        return ret;
    },
    async getLojasByUser(userId, page = "", pageSize = "") {
        const header = { userId }
        const ret = await RequisicaoService.get(`loja/usuario?page=${page}&pageSize=${pageSize}`, header);
        return ret;
    },
    async createLoja(userId, ramoId, loja) {
        const header = { userId, ramoId }
        const ret = await RequisicaoService.post('loja', loja, header);
        return ret;

    },
    // async updateLoja(produtoId = "", lojaId = "", produto) {
    //     const header = { produtoId, lojaId }
    //     const ret = await RequisicaoService.update('loja', produto, header);
    //     return ret;
    // },
    async deleteLoja(lojaId) {
        const header = { lojaId }
        return RequisicaoService.delete('loja', header);

    },
}


export default LojaService;