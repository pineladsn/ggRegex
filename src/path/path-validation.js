import { VALID_PATH_RE } from './path-re'

export default class pathValidation {
    /**
     * Verify if is a valid path
     * @param {string} path should be passed in a valid path format.
     */
    static pathIsValid(path) {
        return VALID_PATH_RE.test(path)
    }
}