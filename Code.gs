/**
 * English AI Voice Tutor — Google Apps Script Web App
 * วิธีใช้: สร้างไฟล์ HTML ชื่อ "index" แล้ววางโค้ดทั้งหมดจาก english-ai-voice-tutor.html
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('English AI Voice Tutor')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
