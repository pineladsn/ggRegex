import {
    VALID_DATE_RE,
    VALID_TIME_RE
} from './datetime-re'

export default class dateTimeValidation {
    /**
     * Verify if is a valid date
     * Verifies non exists dates also in leap years
     * @param {string} date should be passed in DD/MM/YYYY format.
     */
    static dateIsValid(date) {
        return VALID_DATE_RE.test(date)
    }

    /**
     * Verify if is a valid time
     * Verifies valid daytime between 00:00 and 23:59 
     * @param {string} time should be passed in HH:MM format.
     */
    static shorttimeIsValid(time) {
        VALID_TIME_RE.test(time)
    }

    /**
     * Verify if is a valid time
     * Verifies valid daytime between 00:00:00 and 23:59:00 
     * @param {string} time should be passed in HH:MM:SS format.
     */
    static fulltimeIsValid(time) {
        VALID_TIME_WITH_SECONDS_RE.test(time)
    }
}