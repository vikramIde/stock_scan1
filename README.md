# Quasar App

> A Quasar project

## System Setup
```bash
sudo npm install -g cordova
sudo npm install -g quasar-cli
```

## Project Setup

``` bash
# Clone this project.
$ git clone https://github.com/JCharante/stock_scan.git  # I personally use SSH, but not everyone has it setup
$ cd stock_scan

# install dependencies
$ npm install

# build for production with minification
$ quasar build

# Prepare Cordova
$ quasar wrap cordova
$ cd cordova
$ cordova platform add android
$ cordova run
```
