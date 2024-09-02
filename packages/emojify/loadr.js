// loadr.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Global (browser)
    root.Loadr = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  class Loadr {
    constructor(options = {}) {
      this.async = options.async !== undefined ? options.async : false;
      this.cache = options.cache !== undefined ? options.cache : true;
      this.delay = options.delay || 500; // default delay in milliseconds
      this.cacheStore = new Map(); // Cache store for loaded images

      this.init();
    }

    init() {
      // Select all images with the 'swap-src' attribute
      const images = document.querySelectorAll('img[hr-src]');
      images.forEach((img) => this.loadImage(img));
    }

    loadImage(img) {
      const lowResSrc = img.src; // current src is low resolution
      const highResSrc = img.getAttribute('hr-src'); // high resolution src

      if (this.cache && this.cacheStore.has(highResSrc)) {
        // Use cached image if available
        this.swapImage(img, this.cacheStore.get(highResSrc));
        return;
      }

      // Preload high-resolution image
      const highResImage = new Image();
      highResImage.src = highResSrc;

      highResImage.onload = () => {
        if (this.cache) {
          this.cacheStore.set(highResSrc, highResImage.src); // Cache the loaded image
        }
        this.swapImage(img, highResImage.src);
      };

      highResImage.onerror = () => {
        console.error(`Failed to load image: ${highResSrc}`);
      };
    }

    swapImage(img, highResSrc) {
      // Delay before swapping the src
      setTimeout(() => {
        img.src = highResSrc; // replace src with high-res version
        img.dispatchEvent(new Event('loadr:loaded')); // Dispatch load event
      }, this.delay);
    }

    clearCache() {
      this.cacheStore.clear(); // Method to clear the cache
    }
  }

  return Loadr;
}));