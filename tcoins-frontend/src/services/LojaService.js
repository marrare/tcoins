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

    }
}

export default LojaService;