import RequisicaoService from "./RequisicaoService";

const ComprasService = {

    async addTcoins(codigo, valor) {
        const header = { codigo, valor }
        const ret = await RequisicaoService.post('tcoins/add', header);
        return ret;
    },
    async resgatarTcoins(codigo, valor) {
        const header = { codigo, valor }
        const ret = await RequisicaoService.post('tcoins/resgate', header);
        return ret;
    }


}


export default ComprasService;