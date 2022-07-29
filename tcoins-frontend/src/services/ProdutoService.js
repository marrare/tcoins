import RequisicaoService from "./RequisicaoService";

const ProdutoService = {

    async getProdutosPorLoja(lojaId , page = "", pageSize = "") {
        const header = { lojaId, page, pageSize}
        const ret = await RequisicaoService.get(`/produto/loja`, header);
        return ret;

    }

}

export default ProdutoService;