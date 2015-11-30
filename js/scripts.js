var upArrow = 38;
var downArrow = 40;
var spaceBar = 32;

window.onload = function () {
	var pongCanvas = document.getElementById('pong_canvas');
	if(pongCanvas && pongCanvas.getContext) {
		var ctx = pongCanvas.getContext('2d');

		if (ctx) {
			// pongCanvas.style.display = "block";
			// pongCanvas.style.background = "darkGray";
			pongCanvas.width = 1024;
			pongCanvas.height = 640;

			function drawBoard(){
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
			}

			// Draw paddles and ball	
			function step() {
				ctx.save();
				ctx.clearRect(0, 0, pongCanvas.width, pongCanvas.height);
				drawBoard();
				player.render(ctx);
				computer.render(ctx);
				pongBall.draw(ctx);	
				player.move();
				animate(step);	
				ctx.restore();			
			}		
			step();
		}
	}
}

function Paddle(x,y,width,height,paddleColor) {
	this.x = x || 100;
	this.y = y || 100;
	this.width = width || 20;
	this.height = height || 125;
	this.color = paddleColor || "blue";
	this.speed = 10;
	this.move = function(){
		var boardTop = 50;
		var boardBottom = 460;
		// change this.y position by the speed
		if (this.y == boardTop) {
			alert("top");
			this.y += 10;			
		} else if (this.y == boardBottom) {
			alert("bottom");
			this.y -= 10;			
		}
		// check to make sure new position isn't past board edges or else move it back to board edge

	  //console.log(player.y);
	}
}
// keydown make sure is arrow key up/down
// on keyup reset speed y to 0
var pressArrowKey = window.addEventListener("keydown", function(e) {
	e.preventDefault();
	console.log(player.y);
	if (e.keyCode == downArrow) {
		player.y += player.speed;
	} else if (e.keyCode == upArrow) {
		player.y -= player.speed;
	}
}, false);

Paddle.prototype.render = function (c) {
	c.fillStyle = this.color;
	c.beginPath();
	c.fillRect(this.x, this.y, this.width, this.height);
	c.stroke();
}

var player = new Paddle(75,250,20,125,"red");
var computer = new Paddle(930,250,20,125,"red");
var pongBall = new Ball(600,300,15, "lightgray");

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



// animate
var animate = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame    ||
window.oRequestAnimationFrame      || 
window.msRequestAnimationFrame     ||
function(callback) { window.setTimeout(callback, 1000/60) };

















