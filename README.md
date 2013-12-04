# Screenshotter
Create screenshots from a list of URLs using PhantomJS.

## Requirements
* NodeJS
* NPM
* PhantomJS

## Installation
* Clone this repo
* `$ npm install`

## Usage
`$ node screenshotter.js`

Put the URLs you want to take screenshots of in `urls`. The screenshots will be saved in the `images/` directory.

## Caution
You can speed up the entire process by changing the `fetchLimit` and `waitingTime` variables in the script. Please note that this can cause the script to stop working. Use at your own risk.

