import { VALID_CREDIT_CARD_RE } from './creditcard-re'

export default class creditCardValidation {
    /**
     * Verify if is a valid creditcardNumber
     * @param {string} creditcardNumber should be passed in NNNN-NNNN-NNNN-NNNN format.
     */
    static creditCardIsValid(creditcardNumber) {
        return VALID_CREDIT_CARD_RE.test(creditcardNumber)
    }
}