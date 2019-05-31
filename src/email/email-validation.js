import { VALID_EMAIL_RE } from './email-re'

export default class emailValidation {
    /**
     * Verify if is a valid email
     * @param {string} email should be passed in a valid email format.
     */
    static emailIsValid(email) {
        return VALID_EMAIL_RE.test(email)
    }
}