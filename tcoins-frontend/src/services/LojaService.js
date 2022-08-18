import RequisicaoService from "./RequisicaoService";

const LojaService = {

    async getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = "") {
        const header = { nomeLoja, ramoLoja }
        const ret = await RequisicaoService.get(`loja?currentPage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    },

    async cadastrarLojas(loja) {
        const headerLoja = [loja.userId, loja.ramoId]
        const header = { headerLoja}
        const ret = await RequisicaoService.post("/loja", {
            nome:      loja.nome,
            descricao: loja.descricao,
            latitude:  loja.latitude,
            longitude: loja.longitude,
            imagem:    loja.imagem
        }, header)
        return ret;

    },

    async deletarojas(lojaId) {
        const header = { lojaId }
        const ret = await RequisicaoService.delete("/loja", header)
        return ret;
    },
    async getProdutosByLoja(nomeProduto = "", lojaId = "", currentpage = "", pageSize = "") {
        const header = { nomeProduto, lojaId }
        const ret = await RequisicaoService.get(`produto?currentPage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    },
    async getLojasByUser(userId = "", page = "", pageSize = "") {
        const header = {userId}
        const ret = await RequisicaoService.get(`loja/usuario?page=${page}&pageSize=${pageSize}`, header);
        return ret;
    }
}


export default LojaService;