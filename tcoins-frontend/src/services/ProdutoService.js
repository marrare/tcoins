import RequisicaoService from "./RequisicaoService";

const ProdutoService = {

    async getProdutos(lojaId, page = "", pageSize = "") {
        const header = { lojaId, page, pageSize}
        const ret = await RequisicaoService.get("/produto/loja", header, {});
        return ret;

    },

    async cadastrarProdutos(lojaId, nome, descricao, precoTcoins, valorRecompensa, imagem) {
        const header = { lojaId }
        const ret = await RequisicaoService.post("/produto", {
            nome: nome,
            descricao: descricao,
            precoTcoins: precoTcoins,
            valorRecompensa: valorRecompensa,
            imagem: imagem

        }, header)
        return ret;
    },

    async deletarProdutos(id) {
        const header = { id }
        const ret = await RequisicaoService.delete("/produto", header)
        return ret;
    },

    async atualizarProdutos(produtoId, lojaId, nome, descricao, precoTcoins, valorRecompensa, imagem) {
        const header = { produtoId, lojaId }
        const ret = await RequisicaoService.update("/produto", {
            nome: nome,
            descricao: descricao,
            precoTcoins: precoTcoins,
            valorRecompensa: valorRecompensa,
            imagem: imagem
        }, header)
        return ret;

    }

}

export default ProdutoService;