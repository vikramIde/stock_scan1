# Stock Scanner App

> A Ncp project
## Table of Contents

<!-- toc -->

- [System Setup](#system-setup)
- [Project Setup](#project-setup)
- [Offline Mode explanation](#offline-mode-explanation)
- [Use Case](#use-case)
- [Contributing](#contributing)
- [Author](#author)

<!-- tocstop -->

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
$ git clone https://github.com/vikramIde/stock_scan1.git  # I personally use SSH, but not everyone has it setup
$ cd stock_scan1

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
## Offline Mode explanation

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

The major use case could be Remote Warehouses facilities where internet is not good.
So you can finish the stock scan and sync the data on a later point of time when in network

So example of offline mode workflow.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**StockScan** © [vikramIde](https://github.com/vikramIde), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by vikramIde with help from contributors ([list](https://github.com/vikramIde/stock_scan1/graphs/contributors)).

> [vick.Anand](https://facebook.com/vikramabhushan) · GitHub [@rapchik](https://github.com/vikramIde) · 

