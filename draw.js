var board;
(function() {
	board = JXG.JSXGraph.initBoard('jxgbox', {
			boundingbox: [-5, 5, 5, -5],
			keepaspectreatio: true,
			axis:true,
			grid: true,
			showCopyright: false
		});
		createEllipse({"x":1, "y":1}, 10, 5, "blue");
})();

// float x, float y
function createPoint(x, y, color){
	return board.create('point', [x,y], {fixed:true, fillColor: color, strokeColor: color});
}

// float x1, float y1, float x2, float y2
function createSegment(x1, y1, x2, y2, color){
	var p1 = createPoint(x1, y1, color);
	var p2 = createPoint(x2, y2, color);
	board.create('segment', [p1, p2], {fixed:true, fillColor: color, strokeColor: color});
}

// float tailX, float tailY, float headX, float headY
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
	var el = board.create('ellipse',[focus1, focus2, majorAxis], { fixed:true } );
	return {"center": center, "horizontal": horizontal/2, "vertical": vertical/2};
}

function ellipseGeneralForm(h, k, horizontal, vertical, formulaLabel){
	var math = document.getElementById(formulaLabel);
	var xTerm, yTerm;
	yTerm = '\\frac{'+assignVertexY(k)+'^2}{'+vertical+'^2}';
	xTerm = '\\frac{'+assignVertexX(h)+'^2}{'+horizontal+'^2}';
	math.innerHTML = '\\[' + xTerm + '+' + yTerm +'=1\\]';
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,formulaLabel]);
}

function assignVertexX(h){
	if (h == 0){
		return "x";
	}
	else{
		if (-1*h > 0){
			return "(x+" + (-1*h) + ")";
		}
		else if (-1*h < 0){
			return "(x" + (-1*h) + ")";
		}
	}
}

function assignVertexY(k){
	if (k == 0){
		return "y";
	}
	else{
		if (-1*k > 0){
			return "(y+" + (-1*k) + ")";
		}
		else if (-1*k < 0){
			return "(y" + (-1*k) + ")";
		}
	}
}

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
// strokeColor:JXG.hsv2rgb(11*360/25,1,1)
// createPolygon([{"x":0, "y":0},{"x":0, "y":1}, {"x":1, "y":1}, {"x":1, "y":0}]);