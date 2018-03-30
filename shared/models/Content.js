const mongoose = require('mongoose');

const Content = new mongoose.Schema({
  'name': { type: String, default: 'Лидер-Сервис'},
  'adress': { type: String, default: 'г. Сургут, ул. Индустриальная, д38' },
  'googlemaps': { type: String, default: 'https://www.google.ru/maps/place/%D0%9B%D0%B8%D0%B4%D0%B5%D1%80-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81/@61.2786204,73.4191133,17.25z/data=!4m8!1m2!2m1!1z0LvQuNC00LXRgCDRgdC10YDQstC40YE!3m4!1s0x4373970e9eba02e9:0xcea0fafafac120d8!8m2!3d61.278974!4d73.419296'},
  'phone': { type: String, default: '+7(3462)78-36-60' },
  'ourExp': { type: String },
  'ourDiagnostic': { type: String },
  'ourLeadership': { type: String },
  'ourQuallity': { type: String },
  'ourManagment': { type: String }
});

module.exports = mongoose.model('Content', Content);
