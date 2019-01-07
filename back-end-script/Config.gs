// this file is example only. Normally it will not be commited to Github.
function Config() {
  API_KEY = "abcdef";
  getSpreadsheetId =  "1LD3BPictDMVkgr6KT3my1VfSlzr-gza0XP11KBIkOF4";
  postSpreadsheetId = "1-ql0OLfoaI9R7CDaDStk4lvQ1LWM3rxtsCWw3VnPrtA";
  getSpreadsheet = SpreadsheetApp.openById(getSpreadsheetId);
  postSpreadsheet = SpreadsheetApp.openById(postSpreadsheetId);
  sendToEmail = "evaliisagalen@gmail.com";

  return {
    api_key: API_KEY,
    getSpreadsheetId: getSpreadsheetId,
    postSpreadsheetId: postSpreadsheetId,
    getSpreadsheet: getSpreadsheet,
    postSpreadsheet: postSpreadsheet,
    sendToEmail: sendToEmail
  }
}
