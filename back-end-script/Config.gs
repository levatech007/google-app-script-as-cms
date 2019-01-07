// this file is example only. Normally it should not be commited to Github.
function Config() {
  API_KEY = "abcd1234"; // create an API key
  getSpreadsheetId =  "glxdkvnl329856lsdkghlksh"; // enter ID for the spreadsheet with site content
  postSpreadsheetId = "djlshgk9486783ldhglskghks"; // enter ID for the spreadsheet with contact form submissions
  getSpreadsheet = SpreadsheetApp.openById(getSpreadsheetId);
  postSpreadsheet = SpreadsheetApp.openById(postSpreadsheetId);
  sendToEmail = "test@example.com"; // enter email that the contact form submissions will be sent to

  return {
    api_key: API_KEY,
    getSpreadsheetId: getSpreadsheetId,
    postSpreadsheetId: postSpreadsheetId,
    getSpreadsheet: getSpreadsheet,
    postSpreadsheet: postSpreadsheet,
    sendToEmail: sendToEmail
  }
}
