import * as options from './options'

exports.emailIsValid = function(email) {
    return options.emailValidation.emailIsValid(email)
}

exports.dateIsValid = function(date) {
    return options.dateTimeValidation.dateIsValid(date)
}
exports.shorttimeIsValid = function(time) {
    return options.dateTimeValidation.shorttimeIsValid(time)
}
exports.fulltimeIsValid = function(time) {
    return options.dateTimeValidation.fulltimeIsValid(time)
}

exports.phoneIsValid = function(phone) {
    return options.phoneValidation.phoneIsValid(phone)
}
exports.phoneWithAreaCodeIsValid = function(phone) {
    return options.phoneValidation.phoneWithAreaCodeIsValid(phone)
}

exports.pathIsValid = function(path) {
    return options.pathValidation.pathIsValid(path)
}

exports.creditCardIsValid = function(creditcardNumber) {
    return options.creditCardValidation.creditCardIsValid(creditcardNumber)
}

exports.password8To20AlphanumericIsValid = function(password) {
    return options.passwordValidation.password8To20AlphanumericIsValid(password)
}
exports.password4To8AlphanumericIsValid = function(password) {
    return options.passwordValidation.password4To8AlphanumericIsValid(password)
}
exports.password4To8AlphanumericWeakIsValid = function(password) {
    return options.passwordValidation.password4To8AlphanumericWeakIsValid(password)
}
exports.password4To15AlphanumericIsValid = function(password) {
    return options.passwordValidation.password4To15AlphanumericIsValid(password)
}