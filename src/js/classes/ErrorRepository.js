import { clientErrors } from "../clientErrors";

export default class ErrorRepository {
    static translate(code) {
        let result;
        clientErrors.has(code) ? result = clientErrors.get(code) : result = 'Unknown error';
        return result;
    }
}