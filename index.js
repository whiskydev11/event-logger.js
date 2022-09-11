const fs = require("fs");
const { set, get } = require("lodash");

//Developed by whiskyd3v
//Discord: Whisky#1337

class eLog {
  constructor() {

if (!fs.existsSync("./event-logs.json")) {

 fs.writeFile("event-logs.json", "{}", async function (err2, data) {

if (err2) throw err2;

console.log("[Event-Logger] Sistem ilk kez kullandığı için log dosyası başarıyla oluşturuldu.")

});
  
  return
}

  }

  addLog(data, id) {

if (!fs.existsSync("./event-logs.json")) throw new Error("[Event-Logger] Log dosyası bulunamadı.")

if (!data) throw new Error("[Event-Logger] Log Verisi girilmeden bu işlem yapılamaz.")

if (!id) throw new Error("[Event-Logger] Log ID'si belirtmediniz.")

const fileRead = JSON.parse(fs.readFileSync("./event-logs.json"))

if (fileRead[`${id}`]) throw new Error("[Event-Logger] Bu ID'ye sahip bir log bulunuyor.")

const JsonData = fileRead

set(JsonData, id, data)

fs.writeFileSync("event-logs.json", JSON.stringify(JsonData, null, 4))
    
return true

}

getLog(id) {

let returnValue

if (!fs.existsSync("./event-logs.json")) throw new Error("[Event-Logger] Log dosyası bulunamadı.")

if (!id) throw new Error("[Event-Logger] Çekilecek Log ID belirtilmedi.")
  
const jsonData = JSON.parse(fs.readFileSync("./event-logs.json"))

if (!jsonData[id]) {

returnValue = null

} else {

  returnValue = jsonData[id]

}
  
return returnValue

}

checkLogById(id) {
  
let checked

if (!fs.existsSync("./event-logs.json")) throw new Error("[Event-Logger] Log dosyası bulunamadı.")

if (!id) throw new Error("[Event-Logger] Kontrol edilecek Log ID belirtilmedi.")
  
const jsonData2 = JSON.parse(fs.readFileSync("./event-logs.json"))

if (!jsonData2[id]) {

checked = false

} else {

checked = true
  
}

return checked
}

  //checkLogByValue yapılacak değeri içeren keylerin idsini atacak

getLogIdByValue(data) {

let checkValue

if (!fs.existsSync("./event-logs.json")) throw new Error("[Event-Logger] Log dosyası bulunamadı.")

if (!data) throw new Error("[Event-Logger] Çekilecek Log Datası belirtilmedi.")
  
const jsonData3 = JSON.parse(fs.readFileSync("./event-logs.json"))

function idBul(object, value) {
  return Object.keys(object).filter(key => object[key] === value);
}

let kontrolData = idBul(jsonData3, data)

if (kontrolData[0]) {

checkValue = kontrolData
} else {
  checkValue = null
}

return checkValue
}

checkLogByValue(data) {

let checkedValue

if (!fs.existsSync("./event-logs.json")) throw new Error("[Event-Logger] Log dosyası bulunamadı.")

if (!data) throw new Error("[Event-Logger] Kontrol edilecek Log Datası belirtilmedi.")
  
const jsonData4 = JSON.parse(fs.readFileSync("./event-logs.json"))

function idBul(object, value) {
  return Object.keys(object).filter(key => object[key] === value);
}

let kontrolData2 = idBul(jsonData4, data)

if (kontrolData2[0]) {

checkedValue = true
} else {
  checkedValue = false
}

return checkedValue
}
  
}

module.exports = {
  eLog
}