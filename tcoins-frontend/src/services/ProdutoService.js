import RequisicaoService from "./RequisicaoService";

const ProdutoService = {

    async getProdutos(lojaId, page = "", pageSize = "") {
        const header = { lojaId, page, pageSize}
        const ret = await RequisicaoService.get("/produto/loja", header, {});
        return ret;

    },

    async cadastrarProdutos(produto) {
        const lojaId = produto.lojaId
        const header = { lojaId }
        const ret = await RequisicaoService.post("/produto", {
            nome: produto.nome,
            descricao: produto.descricao,
            precoTcoins: produto.precoTcoins,
            valorRecompensa: produto.valorRecompensa,
            imagem: produto.imagem

        }, header)
        return ret;
    },

    async deletarProdutos(produtoId) {
        const header = { produtoId }
        const ret = await RequisicaoService.delete("/produto", header)
        return ret;
    },

    async atualizarProdutos(produto) {
        const headerProduto = [produto.id, produto.lojaId]
        const header = { headerProduto }
        const ret = await RequisicaoService.update("/produto", {
            nome: produto.nome,
            descricao: produto.descricao,
            precoTcoins: produto.precoTcoins,
            valorRecompensa: produto.valorRecompensa,
            imagem: produto.imagem
        }, header)
        return ret;

    }

}

export default ProdutoService;