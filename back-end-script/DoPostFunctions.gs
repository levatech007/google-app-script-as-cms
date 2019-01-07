var sendToEmail = Config().sendToEmail;
var messages;

function processForm(params) {
  var formIsValid = validateForm(params);
  formIsValid ?  messages = ["Successfully submitted!"] : messages = returnErrors()
  return formIsValid;
}

function getMessages() {
  return messages;
}

function sendEmail(params) {
  var formattedName = params.name.charAt(0).toUpperCase() + params.name.slice(1);
  MailApp.sendEmail({
        to: sendToEmail,
        subject: "New form entry: " + formattedName,
        htmlBody:
        "Name: " + formattedName + "<br>" +
        "Email: " + params.email + "<br>" +
        "Message: " + params.message
      });
}

function buildResponse(formValid, message) {
  return {formIsValid: formValid, message: message}
}
