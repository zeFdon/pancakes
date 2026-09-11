const SHEET_NAME = 'Заявки';

function doPost(event) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Дата', "Ім'я", 'Телефон', 'Інтерес', 'Відгук', 'Джерело', 'Час з форми']);
  }

  const data = event.parameter;

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.interest || '',
    data.feedback || '',
    data.source || '',
    data.submittedAt || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
