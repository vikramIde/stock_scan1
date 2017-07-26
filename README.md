# Stock Scanner App

> A Ncp project

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
## Offline Mode explanaion

So when you load the app first time , It will check in a folder called ```/batch``` , If file doesnt exist it takes you in the app .

there are Three options

### Checkin
In this you can scan the product to checkin to your warehouse

when a product is scanned it gets added to the file called ```product.json``` situated inside ```batch``` folder.

the object looks like this 

```
{ 
	name :'someRandomName'
	code:'scannedbarcode',
	timmeStamp:'you current time in YYYY DD MM HH:MM:SS',
	direction:"In"
}
```

### Checkout

When you are sending the Product from your warehouse to customer, you can use checkout option to scan the products.

The object Structure looks like this

```
{ 
	name :'someRandomName'
	code:'scannedbarcode',
	timmeStamp:'you current time in YYYY DD MM HH:MM:SS',
	direction:"Out"
}
```

### Sync

When you are done with scanning products you can use this option to push it to backend server.
So when the file ```product.json``` is sent to server it will be delted for new batch.


## Use Case

The major use case is that this app can be used anywhere , with out internet , and on a later point of time when you get internet you can sync it to server.

So example of offline mode workflow.