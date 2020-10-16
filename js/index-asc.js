var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locArrayAsc = [];
var Locations = /** @class */ (function () {
    function Locations(name, city, zip, address, imageURL, timestamp) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.imageURL = imageURL;
        this.timestamp = timestamp;
        this.displayTime = timestamp.toLocaleString('de-DE');
        this.displayTime = this.displayTime.slice(0, this.displayTime.length - 3);
        locArrayAsc.push(this);
    }
    /*displays class' properties*/
    Locations.prototype.render = function () {
        return "\n\t\t<div class=\"card col-sm-12 col-md-6 col-lg-3\" style=\"width: 18rem;\">\n\t\t  <img class=\"card-img-top d-none d-md-block\" src=\"" + this.imageURL + "\" alt=\"Picture of " + this.name + "\">\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t    <p class=\"card-text\">" + this.city + "</p>\n\t\t    <p class=\"card-text\">" + this.address + "</p>\n\t\t    <p class=\"card-text\">" + this.zip + "</p>\n\t\t    <p class=\"card-text text-muted\">created: " + this.displayTime + "</p>\n\t\t  </div>\n\t\t</div>\n\t\t";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zip, address, imageURL, timestamp, telephoneNumber, cuisine, homepage) {
        var _this = _super.call(this, name, city, zip, address, imageURL, timestamp) || this;
        _this.telephoneNumber = telephoneNumber;
        _this.cuisine = cuisine;
        _this.homepage = homepage;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "\n\t\t<div class=\"card col-sm-12 col-md-6 col-lg-3\" style=\"width: 18rem;\">\n\t\t  <img class=\"card-img-top d-none d-md-block\" src=\"" + this.imageURL + "\" alt=\"Picture of " + this.name + "\">\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t    <p class=\"card-text\">" + this.city + "</p>\n\t\t    <p class=\"card-text\">" + this.address + "</p>\n\t\t    <p class=\"card-text\">" + this.zip + "</p>\n\t\t    <p class=\"card-text\">" + this.telephoneNumber + "</p>\n\t\t    <p class=\"card-text\">Cuisine: " + this.cuisine + "</p>\n\t\t    <a href=\"" + this.homepage + "\" class=\"btn btn-primary\">Visit</a>\n\t\t    <p class=\"card-text text-muted\">created: " + this.displayTime + "</p>\n\t\t  </div>\n\t\t</div>\n\t\t";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip, address, imageURL, timestamp, date, time, price) {
        var _this = _super.call(this, name, city, zip, address, imageURL, timestamp) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.render = function () {
        return "\n\t\t<div class=\"card col-sm-12 col-md-6 col-lg-3\" style=\"width: 18rem;\">\n\t\t  <img class=\"card-img-top d-none d-md-block\" src=\"" + this.imageURL + "\" alt=\"Picture of " + this.name + "\">\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t    <p class=\"card-text\">" + this.city + "</p>\n\t\t    <p class=\"card-text\">" + this.address + "</p>\n\t\t    <p class=\"card-text\">" + this.zip + "</p>\n\t\t    <p class=\"card-text\">Date: " + this.date + "</p>\n\t\t    <p class=\"card-text\">Doors: " + this.time + "</p>\n\t\t    <p class=\"card-text\">Price: \u20AC " + this.price + "</p>\n\t\t    <p class=\"card-text text-muted\">created: " + this.displayTime + "</p>\n\t\t  </div>\n\t\t</div>\n\t\t";
    };
    return Events;
}(Locations));
/*_____________________creating location objects___________________________*/
new Locations("Karlskirche", "Vienna", 1040, "Kreuzherrengasse 1", "../images/karlskirche.jpg", new Date(2018, 11, 5, 13, 23));
new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "../images/zoo.jpg", new Date(2012, 6, 20, 15, 53));
/*_____________________creating Restaurant objects___________________________*/
new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "../images/thai.png", new Date(2014, 1, 11, 18, 43), "+43(1)5812308", "Thai", "http://www.lemonleaf.at");
new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "../images/sixta.png", new Date(2016, 4, 21, 13, 38), "+43 1 58 528 56", "Austrian", "http://www.sixta-restaurant.at/");
/*_____________________creating Event objects___________________________*/
new Events("Kris Kristofferson", "Vienna", 1150, "Roland Rainer Platz 1", "../images/kris.jpg", new Date(2020, 12, 20, 14, 30), "15.11.2021", "20:00", 58.50);
new Events("Lenny Kravitz", "Vienna", 1150, "Roland Rainer Platz 1", "../images/lenny.jpg", new Date(2020, 12, 20, 14, 27), "09.12.2029", "19:30", 47.80);
locArrayAsc = locArrayAsc.sort(function (a, b) {
    return a.timestamp - b.timestamp;
});
for (var i in locArrayAsc) {
    document.getElementById("locations").innerHTML += locArrayAsc[i].render();
}
