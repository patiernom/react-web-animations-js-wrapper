var isServer = typeof window === "undefined";

if(isServer){
  module.exports = function() {}; // Or something, it's not going to be used anyway
} else {
  module.exports = require('web-animations-js');
}