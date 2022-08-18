import RequisicaoService from "./RequisicaoService";

const ProdutoService = {

    async getProdutosByLoja(nomeProduto = "", lojaId = "", currentpage = "", pageSize = "") {
        const header = { nomeProduto, lojaId }
        const ret = await RequisicaoService.get(`produto?currentPage=${currentpage}&pageSize=${pageSize}`, header);
        return ret;
    },
    async createProduto(lojaId = "", produto) {
        const header = { lojaId }
        const ret = await RequisicaoService.post('produto', produto, header);
        console.log(ret)
        return ret;

    },
    async updateProduto(produtoId = "", lojaId = "", produto) {
        const header = { produtoId, lojaId }
        const ret = await RequisicaoService.update('produto', produto, header);
        return ret;
    },
    async deleteProduto(id) {
        const header = { id }
        const ret = await RequisicaoService.delete('produto', header);
        return ret;
    },
}

export default ProdutoService;