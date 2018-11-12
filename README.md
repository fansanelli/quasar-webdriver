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
Electron testing (NOT PASSING TEST YET):
```
open 3 shells:
$ java -jar ./selenium-server-standalone-3.14.0.jar 
$ npm run electron-chromedriver
$ npm run test-electron
```

(*)You need an android device or emulator up and running

The original test has been ported from Jest to Jasmine
