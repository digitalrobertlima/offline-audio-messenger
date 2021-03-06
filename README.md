
# Offline Audio Messenger

### This app has been discontinued and is now part of [KeyTools](https://github.com/Joohansson/keytools)

Send messages or files between devices using an encrypted audio transfer.
For example when using an air-gapped (offline) computer and need to transfer keys for offline signing of a cryptocurrency transaction. The message does not touch the Internet.

Either run the site online below, unplug the Internet before sending anything or download and run locally (no web server is needed)

[Public Site](https://joohansson.github.io/offline-audio-messenger/)

## Install and run application locally

Download [the zip here](https://github.com/Joohansson/offline-audio-messenger/raw/master/offline-audio-messenger.zip)

Disconnect your Internet connection, extract the zip and open index.html in an safe OS environment.

## Notes

* Offline mode may not work in every browser and OS. Tested with Firefox and Chrome in Ubuntu.
* Encryption used: https://www.npmjs.com/package/simple-crypto-js
* Audio encoding: https://developers.chirp.io/

## How to use

1. Run the site on two PCs (or mobiles). Speaker and mic needs to be configured (or headset). You can even run two tabs on same machine for testing, or record with your phone as intermediate.
2. Type a message or drop a file. Limited to 1 MB for practical reasons. Files are sent as base64 encoded.
3. If the message is split in several parts you will need to hit the send button until the whole payload is completed, or use auto send. The receiving end will append the message and you can encrypt it when finished (using the same encryption key).
4. The result can be copied or downloaded (if decrypted first).
5. Files will be encoded and sent in base64 format. Text files (or base64 strings) are decoded upon downloading.

Not the fastest method in the world with a transfer speed of 7.14 bytes/second. An 8GB HD movie would take 35 years!

## Developer instructions

### Prepare for build (Ubuntu example)`

`apt-get install`\
`git clone https://github.com/Joohansson/offline-audio-messenger`\
`cd offline-audio-messenger`\
`npm install`

### Build application

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Contribution

Find this useful? Send me a Nano donation at `nano_1gur37mt5cawjg5844bmpg8upo4hbgnbbuwcerdobqoeny4ewoqshowfakfo`
