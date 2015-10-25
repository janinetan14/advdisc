var board;
// instantiation of graph board
(function() {
	board = JXG.JSXGraph.initBoard('jxgbox', {
			boundingbox: [-5, 5, 5, -5],
			keepaspectreatio: true,
			axis:true,
			grid: true,
			showCopyright: false
		});
})();

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
	board.create('polygon', pts, {fillColor:color, gradient:'radial', gradientsecondcolor:'white', gradientSecondOpacity:'0'});
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
		var p1 = board.create('point', [10, vy - magnitude]);
		var p2= board.create('point', [-10, vy - magnitude]);
		var line = board.create('line', [p1,p2]);
		var	foci = board.create('point', [vx,vy + magnitude]);
	}
	else if(orientation == "horizontal"){
		var p1 = board.create('point', [vx - magnitude, 10]);
		var p2= board.create('point', [vx - magnitude, -10]);
		var line = board.create('line', [p1,p2]);
		var	foci = board.create('point', [vx + magnitude,vy]);
	}
	board.create('parabola',[foci,line], {fixed:true, strokeColor:color});
}

// int cx, int cy, int h_distance, v_distance, string orientation
function createHyperbola(cx,cy,h_distance,v_distance,orientation){
	var a,c, focus1, focus2;
	var majorAxis_length;
	var v1,v2;

	if(orientation == "horizontal")
	{
	
	// opening left and right (horizontal)
	
	//getting foci
	c = Math.sqrt((Math.pow(h_distance,2)) + (Math.pow(v_distance,2))); 
	focus1 = cx + c;
	focus2 = cx - c;
	
	var f1 = board.create('point', [focus1,cy]);
	var f2 = board.create('point', [focus2,cy]);
	board.create('hyperbola',[f1,f2,(h_distance*2)],{strokeColor:'purple'});
	}
	else if(orientation == "vertical")
	{
	
	// opening up and down (vertical)

	//getting foci
	c = Math.sqrt((Math.pow(h_distance,2)) + (Math.pow(v_distance,2))); 
	focus1 = cy + c;
	focus2 = cy - c;
	
	var f1 = board.create('point', [cx,focus1]);
	var f2 = board.create('point', [cx,focus2]);
	board.create('hyperbola',[f1,f2,(h_distance*2)],{strokeColor:'purple'});

	}
}