function doGet(e) {
  if (!isAuthorized(e))
    return buildErrorResponse("Unauthorized");
  else
    return buildSuccessGetResponse("Authorized");
}

function doPost(e) {
  var response;
  if(typeof e !== "undefined") {
    var formIsValid = processForm(e.parameter);
    formIsValid ? sendEmail(e.parameter) : null;
    formIsValid ? postDataToSheet(e) : null;
    var response = buildResponse(formIsValid, getMessages());
  } else {
    var response = buildResponse(false, "Please fill in all fields");
  }
  return ContentService.createTextOutput(JSON.stringify(response));
}
