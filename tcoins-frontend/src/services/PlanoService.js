import RequisicaoService from "./RequisicaoService";

const PlanoService = {

    async atualizarPlano(userId="", planoId="") {
        const header = { "userId":userId, "planoId":planoId, "duracao":1 }
        const ret = await RequisicaoService.update('plano', {}, header);
        return ret;

    }

}

export default PlanoService;