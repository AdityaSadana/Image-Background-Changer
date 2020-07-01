var image=null;
var image1=null;
var image2=null;

function change1() {
	var a = document.getElementById("can1");
	var b = document.getElementById("finput");

	image1 = new SimpleImage(b);
	image1.drawTo(a);
}

function change2() {
	var a = document.getElementById("can2");
	var b = document.getElementById("binput");

	image2 = new SimpleImage(b);
	image2.drawTo(a);
}

function clearCanvas() {
	var a = document.getElementById("can1");
	var b = document.getElementById("can2");

	var c = a.getContext("2d");
	var d = b.getContext("2d");

	c.clearRect(0,0,a.width,a.height);
	d.clearRect(0,0,b.width,b.height);
}

function bgchangegr() {
	console.log(image1, image2);
	for (var pixel of image1.values()) {
		if (pixel.getGreen()>150 && pixel.getRed()<100 && pixel.getBlue()<100) {
			var x = pixel.getX();
			var y = pixel.getY();
			var pixel2 = image2.getPixel(x, y);
			pixel.setRed(pixel2.getRed());
			pixel.setBlue(pixel2.getBlue());
			pixel.setGreen(pixel2.getGreen());
		}
	}
	var canvas = document.getElementById("can1");
	image1.drawTo(canvas);
}

function bgchangewh() {
	console.log(image1, image2);
	for (var pixel of image1.values()) {
		if (pixel.getGreen()>210 && pixel.getRed()>210 && pixel.getBlue()>210) {
			var x = pixel.getX();
			var y = pixel.getY();
			var pixel2 = image2.getPixel(x, y);
			pixel.setRed(pixel2.getRed());
			pixel.setBlue(pixel2.getBlue());
			pixel.setGreen(pixel2.getGreen());
		}
	}
	var canvas = document.getElementById("can1");
	image1.drawTo(canvas);
}


function bgchangered() {
	console.log(image1, image2);
	for (var pixel of image1.values()) {
		if (pixel.getGreen()<75 && pixel.getRed()>175 && pixel.getBlue()<75) {
			var x = pixel.getX();
			var y = pixel.getY();
			var pixel2 = image2.getPixel(x, y);
			pixel.setRed(pixel2.getRed());
			pixel.setBlue(pixel2.getBlue());
			pixel.setGreen(pixel2.getGreen());
		}
	}
	var canvas = document.getElementById("can1");
	image1.drawTo(canvas);
}

function bgchangeblue() {
	console.log(image1, image2);
	for (var pixel of image1.values()) {
		if (pixel.getGreen()<220 && pixel.getRed()<220 && pixel.getBlue()>150) {
			var x = pixel.getX();
			var y = pixel.getY();
			var pixel2 = image2.getPixel(x, y);
			pixel.setRed(pixel2.getRed());
			pixel.setBlue(pixel2.getBlue());
			pixel.setGreen(pixel2.getGreen());
		}
	}
	var canvas = document.getElementById("can1");
	image1.drawTo(canvas);
}