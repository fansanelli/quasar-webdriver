# Quasar App

> Original work from: https://github.com/kevinmarrec/quasar-testing-starter

The goal is to wire up a webdriver automated testing for quasar.

Chromedriver testing:
```
open 3 shells:
$ java -jar ./selenium-server-standalone-3.14.0.jar 
$ quasar dev
$ npm run test
```

Appium* testing:
```
open 3 shells:
$ java -jar ./selenium-server-standalone-3.14.0.jar 
$ npm run appium
$ npm run test-appium
```
(*)You need an Android device or emulator up and running

Electron testing:
```
open 3 shells:
$ java -jar ./selenium-server-standalone-3.14.0.jar 
$ npm run electron-chromedriver
$ npm run test-electron
```
Note: the original test has been ported from Jest to Jasmine

# Possible issues
*No Chromedriver found that can automate Chrome 'xx.y.zzzz'.
Check this link:
https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
and install a chromedriver compatible, ex.
```
npm remove appium; npm install appium --chromedriver_version="2.39" --save-dev
```
