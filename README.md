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


# Possible Improvements:
### ENV VAR mappings for test runner
  - [X] **SELENIUM_HOST** || 'localhost',
  - [X] **SELENIUM_PORT** || 4444,
  - [X] **Q_APP_PORT** || 8081,
  - [X] **Q_BASE_PATH** || 'http://localhost' 
### Integrate into quasar-cli
  - [X] Custom wdio runner for monkeypatching wdio with QuasarConfig
  - [ ] Add config keys to quasar.config.js
  - [ ] Expose env vars to/from quasar-cli with possible [dotnev integration](https://medium.com/carbono/using-env-file-in-quasar-apps-72b56909302f)
        to override quasar.config.js for cases like test running. 
### Docker/Selenium Compose Support
  - [X] Generic Docker Support via DockerFile & [Compose]((https://github.com/SeleniumHQ/docker-selenium/wiki/Getting-Started-with-Docker-Compose)) 
  - [X] [Selenium Grid](https://github.com/SeleniumHQ/selenium/wiki/Grid2) - SPA/SSR
  - [ ] [Appium](http://appium.io/docs/en/advanced-concepts/grid/) - Android/iOS/Windows/Cordova
  - [ ] [Spectron](https://electronjs.org/spectron) - Windows/Mac/Electron

### Travis-CI Support
  - [ ] Local headless testing (quasar-starter && on pull request to master for quasar-framework)
  - [ ] Docker headless grid testing (for Docker RFC && quasar-framework)
  - [ ] [Sauce Labs CI](https://docs.travis-ci.com/user/sauce-connect/)

### Template/Prompt Mappings for [Quasar Starter Projects](https://github.com/quasarframework/quasar-starter-kit)    
  - [ ] Docker Support for keeping things sane (RFC for new Mode)
  - [ ] Leverage [Selenium-Standalone](https://www.npmjs.com/package/selenium-standalone) npmjs package for easy local selenium management
  - [ ] Add Electron e2e (if mode exists)
  - [ ] Add Cordova e2e (if mode exists)
  - [ ] Add SPA e2e (if mode exists)
  - [ ] Add SSR e2e (if mode exists)
  - [ ] Add PWA e2e (if mode exists)
  - [ ] Add SSR/PWA e2e (if both modes exists)

### Integration with Quasar Framework and Quasar Starter Kit
  ##### Basic
  - [ ] SPA (quasar-framework && quasar-starter)
  ##### SSR/PWA
  - [ ] PWA (quasar-framework && (quasar-starter + pwa mode))
  - [ ] SSR (quasar-framework && (quasar-starter + ssr mode))
  - [ ] SSR-PWA (quasar-framework && (quasar-starter + pwa/ssr mode))
  ##### Electron (May be worth looking into [spectron](https://electronjs.org/spectron))
  - [X] Electron - Headless (quasar-starter + electron mode)
  - [ ] Electron - Windows (quasar-framework)
  - [ ] Electron - Linux (quasar-framework)
  - [ ] Electron - Mac (quasar-framework)
  ##### Cordova
  - [ ] Cordova - Browser/Headless (quasar-starter + cordova mode)
  - [X] Cordova - Android (quasar-framework)
  - [ ] Cordova - iOS (quasar-framework)
  - [ ] Cordova - Windows (quasar-framework)



## Details
### ENV VARS
  Should be used to configure the testing env or to reconfigure the build server. 
  This will help reuse some of the configurations

### Selenium Standalone NPM
  Allows local selenium-standalone to be called without manually downloading the JAR. Does require 
  Java to be installed
  
