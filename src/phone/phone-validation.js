import { 
    VALID_PHONE_BR_FORMAT_RE,
    VALID_PHONE_BR_FORMAT_WITH_AREA_CODE_RE 
} from './phone-re'

export default class phoneValidation {
    /**
     * Verify if is a valid phone in a brazilian format
     * @param {string} phone should be passed in a valid phone brazilian format.
     */
    static phoneIsValid(phone) {
        return VALID_PHONE_BR_FORMAT_RE.test(phone)
    }

    /**
     * Verify if is a valid phone in a brazilian format with area code
     * @param {string} phone should be passed in a valid phone brazilian format with area code.
     */
    static phoneWithAreaCodeIsValid(phone) {
        return VALID_PHONE_BR_FORMAT_WITH_AREA_CODE_RE.test(phone)
    }
}