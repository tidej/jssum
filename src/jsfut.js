// Figuren und Toene
// Einbindend direkt nach jssum.js

var Figur = window.Figur = function(url, breite, hoehe) {
    this.img = document.createElement("img");
    this.img.src = url;
    this.img.style.position = 'absolute';
    bildschirm.container.appendChild(this.img);
    this.setzeGroesse(breite, hoehe);
    this.bewegeZu(0, 0);
};

Figur.prototype.setzeGroesse = function (breite, hoehe) {
    this.breite_ = breite;
    this.hoehe_ = hoehe;
    this.img.style.width = (breite * bildschirm.scalePercentX) + '%';
    this.img.style.height = (hoehe * bildschirm.scalePercentY) + '%';
};

Figur.prototype.bewegeZu = function (x, y) {
    this.setzeX(x);
    this.setzeY(y);
};

Figur.prototype.setzeX = function(x) {
    this.x_ = x;
    this.img.style.left = x * bildschirm.scalePercentX + '%';
};

Figur.prototype.setzeY = function(y) {
    this.y_ = y;
    this.img.style.bottom = y * bildschirm.scalePercentY + '%';
};

Figur.prototype.x = function () {
    return this.x_;
};

Figur.prototype.y = function () {
    return this.y_;
};

Figur.prototype.breite = function() {
    return this.breite_;
};

Figur.prototype.hoehe = function() {
    return this.hoehe_;
};
