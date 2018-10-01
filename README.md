# Quasar App

> Original work from: https://github.com/kevinmarrec/quasar-testing-starter

The goal is to wire up a webdriver automated testing for quasar.

```
open 3 shells:
$ quasar dev
$ java -jar ./selenium-server-standalone-3.14.0.jar 
$ ./node_modules/.bin/wdio wdio.conf.js
```

The original "test" has been ported to Mocha and made run on chromedriver
