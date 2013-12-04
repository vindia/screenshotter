var screenshot = require('url-to-screenshot');
var async = require('async');
var fs = require('fs');

// Maximum number of URLs to fetch simulataneously
// Can be set higher than 1, but could cause errors when set too high
var fetchLimit = 1;

// Amount of ms that will be between screenshot requests
// Setting this too low will cause errors
var waitingTime = 1000;

fs.readFile('urls', 'utf8', function(err, data) {
  if (err) return console.log(err);

  urls = data.trim().split('\n');
  // This limit could be higher than 1
  async.eachLimit(urls, fetchLimit, makeScreenshot);
});

function makeScreenshot(url, next) {
  console.log('Fetching: ' + url);

  screenshot(url).capture(function(err, img) {
    if (err) throw err;
    
    screenshotFile = __dirname + '/images/' + new Date().getTime() + '.png';
    fs.writeFileSync(screenshotFile, img);
    console.log('> Wrote ' + screenshotFile);
  });

  setTimeout(next, waitingTime);
}
