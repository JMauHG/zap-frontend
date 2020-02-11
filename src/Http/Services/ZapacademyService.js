import ZapacademyManager from '../ServiceManagers/ZapacademyManager';

class ZapacademyService {

    constructor() {
        this.event = localStorage.getItem("event");
        this.manager = new ZapacademyManager();
    }

    getUserLogin(payload) {

        const endpoint = '/login';

        let data = this.manager.performPostRequest(endpoint,payload);
        return data;
    }

    getBeneficiarytList() {

        const endpoint = '/evento/eventos/' + this.event;


        let data = this.manager.performGetRequest(endpoint);
        return data;
    }

    getBeneficiaryInfo(curp) {

        const endpoint = '/beneficiario/' + curp + '/' + this.event;

        let data = this.manager.performGetRequest(endpoint);
        return data;
    }

    addBeneficiary(payload) {

        const endpoint = '/beneficiario';

        let data = this.manager.performPostRequest(endpoint,payload);
        return data;
    }

    getUserList() {

        const endpoint = '/usuario';
        let data = this.manager.performGetRequest(endpoint);
        return data;
    }

    getUserInfo(id) {

        const endpoint = '/usuario/' + id;
        let data = this.manager.performGetRequest(endpoint);
        return data;
    }

    getEventList() {

        const endpoint = '/evento/eventos' + this.event;

        let data = this.manager.performGetRequest(endpoint);
        return data;
    }

    getEventInfo(curp) {

        const endpoint = '/beneficiario/' + curp + '/' + this.event;

        let data = this.manager.performGetRequest(endpoint);
        return data;
    }
}

export default ZapacademyService;