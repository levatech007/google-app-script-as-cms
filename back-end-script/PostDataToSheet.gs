var sheet = Config().postSpreadsheet.getSheets()[0];
// post data from contact form submission to google sheet 
function postDataToSheet(e) {
  var rows = sheet.getDataRange().getValues();
  var headings = rows[0].map(String.toLowerCase);
  var row = [];
  for (i in headings)
    headings[i] == "timestamp" ? row.push(new Date()) : row.push(e.parameter[headings[i]]);

    sheet.appendRow(row);
  }
