import emailValidation from './email/email-validation'
import dateTimeValidation from './dateTime/datetime-validation'
import phoneValidation from './phone/phone-validation'
import pathValidation from './path/path-validation'
import creditCardValidation from './creditCard/creditcard-validation'
import passwordValidation from './password/password-validation'


exports.emailIsValid = function(email) {
    return emailValidation.emailIsValid(email);
}

exports.dateIsValid = function(date) {
    return dateTimeValidation.dateIsValid(date);
}
exports.shorttimeIsValid = function(time) {
    return dateTimeValidation.shorttimeIsValid(time);
}
exports.fulltimeIsValid = function(time) {
    return dateTimeValidation.fulltimeIsValid(time);
}

exports.phoneIsValid = function(phone) {
    return phoneValidation.phoneIsValid(phone);
}
exports.phoneWithAreaCodeIsValid = function(phone) {
    return phoneValidation.phoneWithAreaCodeIsValid(phone);
}

exports.pathIsValid = function(path) {
    return pathValidation.pathIsValid(path);
}

exports.creditCardIsValid = function(creditcardNumber) {
    return creditCardValidation.creditCardIsValid(creditcardNumber);
}

exports.password8To20AlphanumericIsValid = function(password) {
    return passwordValidation.password8To20AlphanumericIsValid(password);
}
exports.password4To8AlphanumericIsValid = function(password) {
    return passwordValidation.password4To8AlphanumericIsValid(password);
}
exports.password4To8AlphanumericWeakIsValid = function(password) {
    return passwordValidation.password4To8AlphanumericWeakIsValid(password);
}
exports.password4To15AlphanumericIsValid = function(password) {
    return passwordValidation.password4To15AlphanumericIsValid(password);
}