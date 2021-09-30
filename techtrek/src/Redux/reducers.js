import { AUTH, LOGOUT, ERROR} from "./actionTypes";

export default function reducers(state = {authData: null}, {type, data}) {
    switch(type) {
        case AUTH:
            return {...state, authData : data.result, token : data.token, error : null};
        case LOGOUT:
            return {...state, authData : null, token : null, error : null};
        case ERROR:
            return {...state, error : data};
        default:
            return state;
    }
}