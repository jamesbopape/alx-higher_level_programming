#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            return {}; // Return an empty object if conditions are met
        }
        this.width = w;
        this.height = h;
    }
}

module.exports = Rectangle;
