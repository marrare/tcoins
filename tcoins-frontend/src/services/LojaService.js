import RequisicaoService from "./RequisicaoService";

const LojaService = {

    async getLojas(nomeLoja = "", ramoLoja = "", currentpage = "", pageSize = "") {
        const header = { nomeLoja, ramoLoja }
        const ret = await RequisicaoService.get(`loja?currentPage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    },

    async cadastrarLojas(userId, ramoId, nome, descricao, latitude, longitude, imagem) {
        const header = { userId, ramoId}
        const ret = await RequisicaoService.post("/loja", {
            nome: nome,
            descricao: descricao,
            latitude: latitude,
            longitude: longitude,
            imagem: imagem
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