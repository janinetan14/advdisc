var board;

(function() {
	initboard();
})();

function initboard(){
	board = JXG.JSXGraph.initBoard('jxgbox', {
		boundingbox: [-5, 5, 5, -5],
		keepaspectreatio: true,
		axis:true,
		grid: true,
		showCopyright: false
	});
	document.getElementById("changedformula").innerHTML = "";
}

// float x, float y, string color
function createPoint(x, y, color){ 
	return board.create('point', [x,y], {fixed:true, fillColor: color, strokeColor: color});
}

// float x1, float y1, float x2, float y2, string color
function createSegment(x1, y1, x2, y2, color){
	var p1 = createPoint(x1, y1, color);
	var p2 = createPoint(x2, y2, color);
	board.create('segment', [p1, p2], {fixed:true, fillColor: color, strokeColor: color});
}

// float tailX, float tailY, float headX, float headY, string color
function createVector(tailX, tailY, headX, headY, color){
	var v = board.create('segment', [[tailX, tailY], [headX, headY]], {lastarrow: true, fixed:true, fillColor: color, strokeColor: color});
}

// Point[] points
function createPolygon(points, color){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		pts[i] = createPoint(points[i].x, points[i].y, color);
	}
	board.create('polygon', pts, {strokeColor: color, fillColor:color, gradient:'radial', gradientsecondcolor:'white', gradientSecondOpacity:'0'});
}

// Point center, float horizontal, float vertical, string color
function createEllipse(center, horizontal, vertical, color){
	var majorAxis = Math.max(horizontal, vertical);
	var minorAxis = Math.min(horizontal, vertical);
	var focus1, focus2;
	var c = Math.sqrt(Math.pow(majorAxis/2, 2) - Math.pow(minorAxis/2, 2));
	if (majorAxis == horizontal){
		focus1 = createPoint(center.x+c, center.y, color);
		focus2 = createPoint(center.x-c, center.y, color);
	}
	else{
		focus1 = createPoint(center.x, center.y+c, color);
		focus2 = createPoint(center.x, center.y-c, color);
	}
	var el = board.create('ellipse',[focus1, focus2, majorAxis], { fixed:true, strokeColor: color } );
	return {"center": center, "horizontal": horizontal/2, "vertical": vertical/2};
}

// int vx, int vy, int magnitude, string orientation, string color
function createParabola(vx, vy, magnitude, orientation, color){
	if(orientation == "vertical"){
		var p1 = createPoint(1000, vy - magnitude, color);
		var p2 = createPoint(-1000, vy - magnitude, color);
		var line = board.create('line', [p1,p2]);
		var	foci = createPoint(vx,vy + magnitude, color);
	}
	else if(orientation == "horizontal"){
		var p1 = createPoint(vx - magnitude, 1000, color);
		var p2 = createPoint(vx - magnitude, -1000, color);
		var line = board.create('line', [p1,p2], {fixed:true});
		var	foci = createPoint(vx + magnitude,vy, color);
	}
	board.create('parabola',[foci,line], {fixed:true, strokeColor:color});
}

// int cx, int cy, int h_distance, v_distance, string orientation
function createHyperbola(cx,cy,h_distance,v_distance,orientation,color){
	var a, focus1, focus2;
	if(orientation == "horizontal"){
		a = createPoint(cx +h_distance, cy, color);
		focus1 = createPoint(cx + Math.sqrt(Math.pow(h_distance,2)+Math.pow(v_distance,2)),cy, color);
		focus2 = createPoint(cx - Math.sqrt(Math.pow(h_distance,2)+Math.pow(v_distance,2)),cy, color);
	}
	else if(orientation == "vertical"){
		a = createPoint(cx, cy + v_distance, color);
		focus1 = createPoint(cx, cy + Math.sqrt(Math.pow(h_distance,2)+Math.pow(v_distance,2)), color);
		focus2 = createPoint(cx, cy - Math.sqrt(Math.pow(h_distance,2)+Math.pow(v_distance,2)), color);
	}
	board.create('hyperbola',[focus1,focus2,a],{fixed:true, strokeColor:color});
}