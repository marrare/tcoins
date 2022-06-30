import axios from 'axios';

const TCOINS_API_BASE_URL = "https://tcoinsapp.herokuapp.com/api/tcoins";

class TcoinsService {

    getTcoins(){
        return axios.get(TCOINS_API_BASE_URL);
    }

    createTcoins(tcoins){
        return axios.post(TCOINS_API_BASE_URL, tcoins);
    }

    getTcoinsById(tcoinsId){
        return axios.get(TCOINS_API_BASE_URL + '/' + tcoinsId);
    }

    updateTcoins(tcoins, tcoinsId){
        return axios.put(TCOINS_API_BASE_URL + '/' + tcoinsId, tcoins);
    }

    deleteTcoins(tcoinsId){
        return axios.delete(TCOINS_API_BASE_URL + '/' + tcoinsId);
    }
}

export default new TcoinsService()