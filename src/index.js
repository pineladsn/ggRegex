import emailValidation from './email/email-validation'
import dateTimeValidation from './dateTime/datetime-validation'
import phoneValidation from './phone/phone-validation'
import pathValidation from './path/path-validation'
import creditCardValidation from './creditCard/creditcard-validation'
import passwordValidation from './password/password-validation'


exports.printMsg = function() {
    console.log("This is a message from the demo package");
}

exports.emailValidation = function(email) {
    return emailValidation.emailIsValid(email);
}