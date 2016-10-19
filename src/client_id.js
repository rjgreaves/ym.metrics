import * as uuid from "uuid";

export default function getClientId() {
    let clientId = localStorage.getItem("clientId");
    if(!clientId){
        clientId = uuid.v1();
    }
    return clientId;
}