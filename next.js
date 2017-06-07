const isServer = typeof window === "undefined";

if(isServer){
  module.exports = () => {}; // Or something, it's not going to be used anyway
} else {
  // eslint-disable-next-line
  module.exports = require('web-animations-js/web-animations-next.min');
}