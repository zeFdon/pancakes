const SHEET_NAME = 'Заявки';
const HEADERS = ['Дата', "Ім'я", 'Телефон', 'Інтерес', 'Відгук', 'Джерело', 'Час з форми'];

function doPost(event) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  ensureHeaders(sheet);

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

// Пише шапку в порожній лист або додає колонку «Відгук» у старий лист без неї.
function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }

  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const current = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  if (current.indexOf('Відгук') !== -1) {
    return;
  }

  const interestIndex = current.indexOf('Інтерес');
  const insertAfter = interestIndex === -1 ? lastColumn : interestIndex + 1;

  sheet.insertColumnAfter(insertAfter);
  sheet.getRange(1, insertAfter + 1).setValue('Відгук');
}
