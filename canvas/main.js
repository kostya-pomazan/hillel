window.addEventListener('load', createCanvas(300, 200, 140));

function createCanvas(x, y, radius) {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	const circle = new Path2D();
	const minRadius = 20;
	// const width = canvas.width;
	// const height = canvas.height;
	
	drawCircle(x, y, radius);
	
	//void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	function drawCircle(x, y, radius) {
		circle.arc(x, y, radius, 0, 2 * Math.PI);
		ctx.stroke(circle);

		if (radius > minRadius) {
			drawCircle(x + radius * 1, y, radius * 0.5);
			drawCircle(x - radius * 1, y, radius * 0.5);
		}
	}
}
