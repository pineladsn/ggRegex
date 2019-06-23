import { 
    VALID_PASSWORD_RESTRICTIONS_1_RE,
    VALID_PASSWORD_RESTRICTIONS_2_RE,
    VALID_PASSWORD_RESTRICTIONS_3_RE,
    VALID_PASSWORD_RESTRICTIONS_4_RE
} from './password-re'

export default class PasswordValidation {
    /**
     * Verify if is a valid password
     * @param {string} password.
     * Used to restrict passwords to a length of 8 to 20 aplhanumeric 
     * characters and select special characters. The password also can 
     * not start with a digit, underscore or special character and 
     * must contain at least one digit.
     */
    static password8To20AlphanumericIsValid(password) {
        return VALID_PASSWORD_RESTRICTIONS_1_RE.test(password)
    }

    /**
     * Verify if is a valid password
     * @param {string} password.
     * Password matching expression. Password must be at least 4 characters, 
     * no more than 8 characters, and must include at least one upper case 
     * letter, one lower case letter, and one numeric digit.
     */
    static password4To8AlphanumericIsValid(password) {
        return VALID_PASSWORD_RESTRICTIONS_2_RE.test(password)
    }

    /**
     * Verify if is a valid password
     * @param {string} password.
     * Password expression. Password must be between 4 and 8 digits 
     * long and include at least one numeric digit.
     */
    static password4To8AlphanumericWeakIsValid(password) {
        return VALID_PASSWORD_RESTRICTIONS_3_RE.test(password)
    }

    /**
     * Verify if is a valid password
     * @param {string} password.
     * The password's first character must be a letter, it must contain 
     * at least 4 characters and no more than 15 characters and no 
     * characters other than letters, numbers and the underscore may be used
     */
    static password4To15AlphanumericIsValid(password) {
        return VALID_PASSWORD_RESTRICTIONS_4_RE.test(password)
    }
}