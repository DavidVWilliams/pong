window.onload = function () {
	var pongCanvas = document.getElementById('pong_canvas');
	if(pongCanvas && pongCanvas.getContext) {
		var ctx = pongCanvas.getContext('2d');

		if (ctx) {
			// pongCanvas.style.display = "block";
			// pongCanvas.style.background = "darkGray";
			pongCanvas.width = 1024;
			pongCanvas.height = 640;

			// Set rectangle color
			ctx.fillStyle = "#222";
			ctx.fillRect(50,50, 924, 540);
			//Add stroke to rectangle
			ctx.lineWidth = 10;
			ctx.strokeStyle = "white";
			ctx.strokeRect(50,50,924,540)

			// Set dashed divider
			ctx.setLineDash([10,20]);
			ctx.beginPath();
			ctx.strokeStyle = "white";
			ctx.moveTo(512,60);
			ctx.lineTo(512, 580);
			ctx.stroke();

			// Draw  player paddle, left side
			// ctx.fillStyle = "blue";
			// ctx.fillRect(75,75,20,125)
			player.render(ctx);
			computer.render(ctx);
			pongBall.draw(ctx);
		}
	}

}

function Paddle(x,y,width,height,paddleColor) {
	this.x = x || 100;
	this.y = y || 100;
	this.width = width || 20;
	this.height = height || 125;
	this.color = paddleColor || "blue";
}

Paddle.prototype.render = function (c) {
	c.fillStyle = this.color;
	c.beginPath();
	c.fillRect(this.x, this.y, this.width, this.height);
	c.stroke();
}

var player = new Paddle(75,100,20,125,"red");
var computer = new Paddle(930,400,20,125,"red");

function Ball (x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;

	this.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
		ctx.fill();
	}
}

var pongBall = new Ball(600,300,15, "lightgray");


















