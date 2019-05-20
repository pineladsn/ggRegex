'use strict'

export default class emailValidation {
    static emailIsValid(email) {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        return re.test(email)
    }
}