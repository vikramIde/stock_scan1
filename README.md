# Quasar App

> A Quasar project

## System Setup
```bash
# If you don't have Android Studio Setup
$ sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
# Download Android Studio from https://developer.android.com/studio/index.html
# Run studio.sh, and finish installing android.

# Finally
$ sudo npm install -g cordova
$ sudo npm install -g quasar-cli
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
