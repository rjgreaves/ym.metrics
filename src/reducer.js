import { List, Map } from "immutable";
import getClientId from "./client_id";

function setState(state, newState) {
    // if(!newState.get("clientId")){
    //     newState = newState.set("clientId", getClientId());
    // }
    return state.merge(newState);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return setState(state, action.state);
    }
    return state;
}