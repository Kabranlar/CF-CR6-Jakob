let locArrayAsc = [];

class Locations {
	name: string;
	city: string;
	zip: number;
	address: string;
	imageURL: string;
	timestamp: Date;
	displayTime: string;
	
	constructor(name:string, city:string, zip:number, address:string, imageURL:string, timestamp:Date) {
		this.name = name;
		this.city = city;
		this.zip = zip;
		this.address = address;
		this.imageURL = imageURL;
		this.timestamp = timestamp;
		this.displayTime =timestamp.toLocaleString('de-DE');
		this.displayTime = this.displayTime.slice(0, this.displayTime.length - 3);
		locArrayAsc.push(this);
	}
	/*displays class' properties*/
	render(){
		return `
		<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem;">
		  <img class="card-img-top d-none d-md-block" src="${this.imageURL}" alt="Picture of ${this.name}">
		  <div class="card-body">
		    <h5 class="card-title">${this.name}</h5>
		    <p class="card-text">${this.city}</p>
		    <p class="card-text">${this.address}</p>
		    <p class="card-text">${this.zip}</p>
		    <p class="card-text text-muted">created: ${this.displayTime}</p>
		  </div>
		</div>
		`
	}
}

class Restaurant extends Locations {
	telephoneNumber: string;
	cuisine: string;
	homepage: string;
	
	constructor(name:string, city:string, zip:number, address:string, imageURL:string, timestamp:Date, telephoneNumber:string, cuisine:string, homepage:string) {
		super(name, city, zip, address, imageURL ,timestamp);
		this.telephoneNumber = telephoneNumber;
		this.cuisine = cuisine;
		this.homepage = homepage;
	}

	render(){
		return `
		<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem;">
		  <img class="card-img-top d-none d-md-block" src="${this.imageURL}" alt="Picture of ${this.name}">
		  <div class="card-body">
		    <h5 class="card-title">${this.name}</h5>
		    <p class="card-text">${this.city}</p>
		    <p class="card-text">${this.address}</p>
		    <p class="card-text">${this.zip}</p>
		    <p class="card-text">${this.telephoneNumber}</p>
		    <p class="card-text">Cuisine: ${this.cuisine}</p>
		    <a href="${this.homepage}" class="btn btn-primary">Visit</a>
		    <p class="card-text text-muted">created: ${this.displayTime}</p>
		  </div>
		</div>
		`
	}
}

class Events extends Locations {
	date: string;
	time: string;
	price: number;
	
	constructor(name:string, city:string, zip:number, address:string, imageURL:string, timestamp:Date, date:string, time:string, price:number) {
		super(name, city, zip, address, imageURL, timestamp);
		this.date = date;
		this.time = time;
		this.price = price;
	}

	render(){
		return `
		<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem;">
		  <img class="card-img-top d-none d-md-block" src="${this.imageURL}" alt="Picture of ${this.name}">
		  <div class="card-body">
		    <h5 class="card-title">${this.name}</h5>
		    <p class="card-text">${this.city}</p>
		    <p class="card-text">${this.address}</p>
		    <p class="card-text">${this.zip}</p>
		    <p class="card-text">Date: ${this.date}</p>
		    <p class="card-text">Doors: ${this.time}</p>
		    <p class="card-text">Price: € ${this.price}</p>
		    <p class="card-text text-muted">created: ${this.displayTime}</p>
		  </div>
		</div>
		`
	}
}



/*_____________________creating location objects___________________________*/

new Locations("Karlskirche", "Vienna", 1040, "Kreuzherrengasse 1", "../images/karlskirche.jpg", new Date(2018, 11, 5, 13, 23));
new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "../images/zoo.jpg", new Date(2012, 6, 20, 15, 53));



/*_____________________creating Restaurant objects___________________________*/

new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "../images/thai.png", new Date(2014, 1, 11, 18, 43), "+43(1)5812308", "Thai", "http://www.lemonleaf.at");
new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "../images/sixta.png", new Date(2016, 4, 21, 13, 38), "+43 1 58 528 56", "Austrian", "http://www.sixta-restaurant.at/");


/*_____________________creating Event objects___________________________*/

new Events("Kris Kristofferson", "Vienna", 1150, "Roland Rainer Platz 1", "../images/kris.jpg", new Date(2020, 12, 20, 14, 30), "15.11.2021", "20:00", 58.50);
new Events("Lenny Kravitz", "Vienna", 1150, "Roland Rainer Platz 1", "../images/lenny.jpg", new Date(2020, 12, 20, 14, 27), "09.12.2029", "19:30", 47.80);

locArrayAsc = locArrayAsc.sort(function(a, b){
	return a.timestamp - b.timestamp;
});

for(let i in locArrayAsc){
	document.getElementById("locations").innerHTML += locArrayAsc[i].render();
}