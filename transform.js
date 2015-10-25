function translatePoint(x, y, tx, ty){
	createPoint(x+tx,y+ty,"aquamarine");
}

function translateSegement(x1, y1, x2, y2, tx, ty){
	createSegment(x1+tx, y1+ty, x2+tx, y2+ty, "aquamarine");
}

function scaleSegment(x1, y1, x2, y2, scalar){
	createSegment(x1*scalar, y1*scalar,x2*scalar, y2*scalar, "aquamarine");
}

function reflectSegment(x1, y1, x2, y2, axis){
	if(axis == "x"){
		x1 = x1*-1;
		x2 = x2*-1;
	}
	else if(axis == "y"){
		y1 = y1*-1;
		y2 = y2*-1;	
	}
	createSegment(x1, y1, x2, y2, "aquamarine");
}

function rotateSegment(x1, y1, x2, y2, degree){
	newx1 = x1*Math.cos(degree * Math.PI/180) - y1*Math.sin(degree * Math.PI/180);
	newy1 = x1*Math.sin(degree * Math.PI/180) + y1*Math.cos(degree * Math.PI/180);
	newx2 = x2*Math.cos(degree * Math.PI/180) - y2*Math.sin(degree * Math.PI/180);
	newy2 = x2*Math.sin(degree * Math.PI/180) + y2*Math.cos(degree * Math.PI/180);
	createSegment(newx1, newy1, newx2, newy2, "aquamarine");
}

function shearSegment(x1, y1, x2, y2, sx, sy){
	newx1 = x1 + sx*y1;
	newy1 = y1 + sy*x1;
	newx2 = x2 + sx*y2;
	newy2 = y2 + sy*x2;
	createSegment(newx1, newy1, newx2, newy2, "aquamarine");
}

function translatePolygon(points,tx,ty){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		pts[i] = {"x": points[i].x + tx, "y": points[i].y + ty};
	}
	createPolygon(pts, "aquamarine");
}

function scalePolygon(points, scalar){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		pts[i] = {"x": points[i].x *scalar, "y": points[i].y *scalar};
	}
	createPolygon(pts, "aquamarine");
}

function reflectPolygon(points, axis){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		if(axis == "x")
			pts[i] = {"x": points[i].x * -1, "y": points[i].y};
		else if(axis == "y")
			pts[i] = {"x": points[i].x, "y" : points[i].y * -1};
	}
	createPolygon(pts, "aquamarine");
}

function rotatePolygon(points, degree){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		pts[i].x =  points[i].x*Math.cos(degree * Math.PI/180) - points[i].y*Math.sin(degree * Math.PI/180);
		pts[i].y = points[i].x*Math.sin(degree * Math.PI/180) + points[i].y*Math.cos(degree * Math.PI/180);
		alert(pts[i].x);
	}
	createPolygon(pts, "aquamarine");
}

function shearPolygon(points, sx, sy){

	newx1 = x1 + sx*y1;
	newy1 = y1 + sy*x1;
	newx2 = x2 + sx*y2;
	newy2 = y2 + sy*x2;
}

