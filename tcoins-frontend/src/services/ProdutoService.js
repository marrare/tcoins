import RequisicaoService from "./RequisicaoService";

const ProdutoService = {

    async getProdutos(page = "", pageSize = "") {
        const header = { page, pageSize}
        const ret = await RequisicaoService.get(`loja?page=${page}&pageSize=${pageSize}`, header);
        return ret;

    }

}

export default ProdutoService;