## İlk önce modülü projemize indiriyoruz.
```bash
npm i event-logger.js
```

## Kod sayfamıza modülü tanımlıyoruz.
```js
const { eLog } = require("event-logger.js");
```

### Modülümüzde **5 Adet** fonksiyon bulunmaktadır. Bunlar;

- **addLog**
- **getLog** 
- **getLogIdByValue** 
- **checkLogById**
- **checkLogByValue**

#### - **Sırasıyla örnekler görelim.**

## **addLog**
- **Log dosyasına bir Log ekler.**
- **Hiç bir Log ID'si aynı olamaz.**
```js
const { eLog } = require("event-logger.js");

const logger = new eLog() //Projemize, logların tutulacağı kayıt dosyasını oluşturur. Tek seferlik işlemdir.

logger.addLog("Whisky", "Developer")
//Girdiğimiz ilk parametre Log Verisidir. İkinci girilen parametre Log Verisinin ID'sidir girmeniz zorunludur.
```
Dosya Hali:
```json
{ "Developer": "Whisky" }
```

## **getLog**
- **Log dosyasından, girdiğiniz ID'ye sahip Log'u çeker.**
```js
const { eLog } = require("event-logger.js");

const logger = new eLog()

console.log(logger.getLog("Developer"))
//Log dosyasından "Developer" ID'sine sahip olan Log'u çektik.
```
Çıktı:
```js
Whisky
```

## **getLogIdByValue**
- **Girilen Log'a sahip olan Log ID'sini çeker.**
- **Sonuç Array olarak döner. Eğer yoksa "null" olarak döner.**
- **Eğer aynı Log'a sahip Log ID'leri varsa hepsini çeker.**
```js
const { eLog } = require("event-logger.js");

const logger = new eLog()

console.log(logger.getLogIdByValue("Whisky"))
//Log ID'sini çekmek istediğimiz Log'u yazıyoruz.
```
Çıktı:
```js
[ "Developer" ]
```

## **checkLogById**
- **Girilen Log ID'sine sahip bir Log'un olup olmadığını kontrol eder.**
- **Sonuç, varsa "true", yoksa "false" olarak döner.**
```js
const { eLog } = require("event-logger.js");

const logger = new eLog()

console.log(logger.checkLogById("Developer"))
//Kontrol edeceğimiz Log ID'sini girdik.
```
Çıktı:
```js
true
```

## **checkLogByValue**
- **Girilen Log'u Log dosyasında kontrol eder.**
- **Sonuç, varsa "true", yoksa "false" olarak döner.**
```js
const { eLog } = require("event-logger.js");

const logger = new eLog() 

console.log(logger.checkLogByValue("Whisky")) 
//Kontrol edeceğimiz Log'u girdik.
```
Çıktı:
```js
true
```

- - - -

### Tüm Hakları Saklıdır. © 2022 
### Developed by whiskyd3v
### İletişim için; 
[Discord Hesabım](https://discord.com/users/960884354396090470)
<br>
[Instagram Hesabım](https://instagram.com/whiskyofficialx)
<br>
[Web Sitem](https://whiskydev.xyz/)


![Picture](https://media.discordapp.net/attachments/1014948590961049712/1018475788380672101/20220910_213704.jpg)