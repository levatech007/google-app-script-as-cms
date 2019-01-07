var errorMessages = [];

function validateForm(params) {
  var formIsValid = true;
  // basic validations
  if (params.name.length < 1) {
      formIsValid = false;
      errorMessages.push("Name must exceed 1 symbol");
  };

  const validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!validEmailPattern.test(params.email)) {
      formIsValid = false;
      errorMessages.push("Email is not valid");
  };

  if (params.message.length < 5) {
      formIsValid = false;
      errorMessages.push("Message must exceed 5 symbols");
  };
  return formIsValid;
}

function returnErrors() {
 return errorMessages;
}
