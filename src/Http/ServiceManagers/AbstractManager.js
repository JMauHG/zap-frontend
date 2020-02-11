class Abstractmanager {

    constructor(){
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
        this.url = "https://zapacademy.herokuapp.com";
        this.auth = localStorage.getItem("auth");
    }

    async performPostRequest(endpoint, payload){

        const props = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth 
            }
        };

        let response = await fetch(this.proxyurl + this.url + endpoint, props);
        let data = await response.json();
        return data;
    }

    async performGetRequest(endpoint){
        const props = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth 
            }
        };

        let response = await fetch(this.proxyurl + this.url + endpoint, props);
        let data = await response.json();
        return data;
    }
}
export default Abstractmanager;