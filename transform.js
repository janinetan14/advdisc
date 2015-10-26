function translatePoint(x, y, tx, ty){
	createPoint(x+tx,y+ty,"aquamarine");
	printMatrix([{"x":x+tx, "y":y+ty}], "changedformula");
}

function translateSegement(x1, y1, x2, y2, tx, ty){
	createSegment(x1+tx, y1+ty, x2+tx, y2+ty, "aquamarine");
	printMatrix([{"x":x1+tx, "y":y1+ty},{"x":x2+tx, "y":y2+ty}], "changedformula");
}

function scaleSegment(x1, y1, x2, y2, scalar){
	createSegment(x1*scalar, y1*scalar,x2*scalar, y2*scalar, "aquamarine");
	printMatrix([{"x":x1*scalar, "y":y1*scalar},{"x":x2*scalar, "y":y2*scalar}], "changedformula");
}

function reflectSegment(x1, y1, x2, y2, axis){
	if(axis == "y"){
		x1 = x1*-1;
		x2 = x2*-1;
	}
	else if(axis == "x"){
		y1 = y1*-1;
		y2 = y2*-1;	
	}
	createSegment(x1, y1, x2, y2, "aquamarine");
	printMatrix([{"x":x1, "y":y1},{"x":x2, "y":y2}], "changedformula");
}

function rotateSegment(x1, y1, x2, y2, degree){
	newx1 = x1*Math.cos(degree * Math.PI/180) - y1*Math.sin(degree * Math.PI/180);
	newy1 = x1*Math.sin(degree * Math.PI/180) + y1*Math.cos(degree * Math.PI/180);
	newx2 = x2*Math.cos(degree * Math.PI/180) - y2*Math.sin(degree * Math.PI/180);
	newy2 = x2*Math.sin(degree * Math.PI/180) + y2*Math.cos(degree * Math.PI/180);
	createSegment(newx1, newy1, newx2, newy2, "aquamarine");
	printMatrix([{"x":newx1, "y":newy1},{"x":newx2, "y":newy2}], "changedformula");
}

function shearSegment(x1, y1, x2, y2, degree){
	newx1 = x1 + Math.tan(degree * Math.PI/180)*y1;
	newx2 = x2 + Math.tan(degree * Math.PI/180)*y2;
	createSegment(newx1, y1, newx2, y2, "aquamarine");
	printMatrix([{"x":newx1, "y":y1},{"x":newx2, "y":y2}], "changedformula");
}

function translateVector(x1, y1, x2, y2, tx, ty){
	createVector(x1+tx, y1+ty, x2+tx, y2+ty, "aquamarine");
	printMatrix([{"x":x1+tx, "y":y1+ty},{"x":x2+tx, "y":y2+ty}], "changedformula");
}

function scaleVector(x1, y1, x2, y2, scalar){
	createVector(x1*scalar, y1*scalar,x2*scalar, y2*scalar, "aquamarine");
	printMatrix([{"x":x1*scalar, "y":y1*scalar},{"x":x2*scalar, "y":y2*scalar}], "changedformula");
}

function reflectVector(x1, y1, x2, y2, axis){
	if(axis == "y"){
		x1 = x1*-1;
		x2 = x2*-1;
	}
	else if(axis == "x"){
		y1 = y1*-1;
		y2 = y2*-1;	
	}
	createVector(x1, y1, x2, y2, "aquamarine");
	printMatrix([{"x":x1, "y":y1},{"x":x2, "y":y2}], "changedformula");
}

function rotateVector(x1, y1, x2, y2, degree){
	newx1 = x1*Math.cos(degree * Math.PI/180) - y1*Math.sin(degree * Math.PI/180);
	newy1 = x1*Math.sin(degree * Math.PI/180) + y1*Math.cos(degree * Math.PI/180);
	newx2 = x2*Math.cos(degree * Math.PI/180) - y2*Math.sin(degree * Math.PI/180);
	newy2 = x2*Math.sin(degree * Math.PI/180) + y2*Math.cos(degree * Math.PI/180);
	createVector(newx1, newy1, newx2, newy2, "aquamarine");
	printMatrix([{"x":newx1, "y":newy1},{"x":newx2, "y":newy2}], "changedformula");
}

function shearVector(x1, y1, x2, y2, degree){
	newx1 = x1 + Math.tan(degree * Math.PI/180)*y1;
	newx2 = x2 + Math.tan(degree * Math.PI/180)*y2;
	createVector(newx1, y1, newx2, y2, "aquamarine");
	printMatrix([{"x":newx1, "y":y1},{"x":newx2, "y":y2}], "changedformula");
}

function translatePolygon(points,tx,ty){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		pts[i] = {"x": points[i].x + tx, "y": points[i].y + ty};
	}
	createPolygon(pts, "aquamarine");
	printMatrix(pts, "changedformula");
}

function scalePolygon(points, scalar){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		pts[i] = {"x": points[i].x *scalar, "y": points[i].y *scalar};
	}
	createPolygon(pts, "aquamarine");
	printMatrix(pts, "changedformula");
}

function reflectPolygon(points, axis){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		if(axis == "y")
			pts[i] = {"x": points[i].x * -1, "y": points[i].y};
		else if(axis == "x")
			pts[i] = {"x": points[i].x, "y" : points[i].y * -1};
	}
	createPolygon(pts, "aquamarine");
	printMatrix(pts, "changedformula");
}

function rotatePolygon(points, degree){
	var pts = [];
	for ( var i = 0; i < points.length; i++){
		pts[i] =  {"x":points[i].x * Math.cos(degree * Math.PI/180) - points[i].y * Math.sin(degree * Math.PI/180),"y":points[i].x * Math.sin(degree * Math.PI/180) + points[i].y * Math.cos(degree * Math.PI/180)};
	}
	createPolygon(pts, "aquamarine");
	printMatrix(pts, "changedformula");
}

function shearPolygon(points, degree){
	var pts = []; 
	for ( var i = 0; i < points.length; i++){
		pts[i] =  {"x": points[i].x +  Math.tan(degree * Math.PI/180)* points[i].y ,"y": points[i].y};
	}
	createPolygon(pts,"aquamarine");
	printMatrix(pts, "changedformula");
}

function translayeHyperbola(cx, cy, tx, ty, h_distance, v_distance, orientation){
	createHyperbola(cx + tx, cy + ty, h_distance, v_distance, orientation);
	printHyperbolaGeneralForm(cx + tx, cy + ty, h_distance, v_distance, orientation, "changedformula");
}

function rotateHyperbola(cx, cy, degree, h_distance, v_distance, orientation){
	if(degree == "90" || degree == "270")
	{
			//createHyperbola(cx, cy,h_distance,v_distance,orientation); 
			if(orientation == "vertical")
				createHyperbola(cx, cy ,v_distance,h_distance,"horizontal");  
			else if(orientation == "horizontal")
				createHyperbola(cx, cy ,v_distance,h_distance,"vertical");  
	}
	else if(degree == "180")	
	{
			createHyperbola(cx, cy,h_distance,v_distance,orientation);					
	}
	
}

function scaleHyperbola(cx, cy, scale, h_distance, v_distance, orientation){
	createHyperbola(cx, cy, h_distance * scale, v_distance * scale, orientation);
	printHyperbolaGeneralForm(cx, cy, h_distance * scale, v_distance * scale, orientation, "changedformula");
}

function reflectHyperbola(cx, cy, axis, h_distance, v_distance, orientation){
	if(axis == "x"){
		cx = cx * -1;
	}
	else if(axis == "y"){
		cy =cy * -1;
	}
	createHyperbola(cx, cy, h_distance, v_distance, orientation);
	printHyperbolaGeneralForm(cx, cy, h_distance, v_distance, orientation, "changedformula");
}

function translateParabola(vx, vy, tx, ty, magnitude, orientation){
	createParabola(vx + tx, vy + ty, magnitude, orientation, "aquamarine");
	printParabolaGeneralForm(vx + tx, vy + ty, magnitude, orientation, "changedformula");
	
}

function rotateParabola(vx, vy, degree, magnitude, orientation){
	var temp;
	if(degree == 90){
		if(orientation == "vertical"){
			temp = vx;
			vx = vy *-1;
			vy = temp;
			magnitude = magnitude * -1;
			orientation = "horizontal";
		}
		else if(orientation == "horizontal"){
			temp = vx;
			vx = vy * -1;
			vy = temp;
			orientation = "vertical";
		}
	}
	else if(degree == 270){
		if(orientation == "vertical"){
			temp = vx * -1;
			vx = vy;
			vy = temp;
			orientation = "horizontal";
		}
		else if(orientation == "horizontal"){
			temp = vx * -1;
			vx = vy * -1;
			vy = temp;
			magnitude = magnitude * -1;
			orientation = "vertical";
		}
	}
	else if(degree == 180){
			vx = vx * -1;
			vy = vy * -1;
			magnitude = magnitude * -1;
	}
	createParabola(vx, vy, magnitude, orientation, "aquamarine");
	printParabolaGeneralForm(vx, vy, magnitude, orientation, "changedformula");
}

function scaleParabola(vx, vy, scalar, magnitude, orientation){
	createParabola(vx, vy, magnitude * scalar, orientation, "aquamarine");
	printParabolaGeneralForm(vx, vy, magnitude * scalar, orientation, "changedformula");
}

function reflectParabola(vx, vy, axis, magnitude, orientation){
	if(axis == "y")
	{
		if(orientation == "vertical"){
			vx = vx * -1;
		}
		else if(orientation == "horizontal"){
			vx = vx * -1;
			magnitude = magnitude * -1;
		}
	}
	else if(axis == "x")
	{
		if(orientation == "vertical"){
			vy = vy * -1;
			magnitude = magnitude * -1;
		}
		else if(orientation == "horizontal"){
			vy = vy * -1;
		}
	}
	createParabola(vx, vy, magnitude, orientation, "aquamarine");
	printParabolaGeneralForm(vx, vy, magnitude, orientation, "changedformula");
}

function translateEllipse(center, tx, ty, horizontal, vertical){
	center.x = center.x + tx;
	center.y =  center.y + ty;
	var ellipseSpecs = createEllipse(center, horizontal, vertical, "aquamarine");
	printEllipseGeneralForm(ellipseSpecs.center.x, ellipseSpecs.center.y, ellipseSpecs.horizontal, ellipseSpecs.vertical, "changedformula");
}

function rotateEllipse(center, degree, horizontal, vertical){
	var ellipseSpecs;
	if(degree == 90)
	{
		var temp = center.x;
		center.x = center.y * -1;
		center.y = temp;
		ellipseSpecs = createEllipse(center, vertical, horizontal, "aquamarine");
	}
	else if( degree == 270)
	{
		var temp = center.x * -1;
		center.x = center.y;
		center.y = temp;
		ellipseSpecs = createEllipse(center, vertical, horizontal, "aquamarine");
	}
	else if(degree == 180)
	{
		center.x = center.x * -1;
		center.y = center.y * -1;
		createEllipse(center, horizontal, vertical, "aquamarine");
	}
	printEllipseGeneralForm(ellipseSpecs.center.x, ellipseSpecs.center.y, ellipseSpecs.horizontal, ellipseSpecs.vertical, "changedformula");
}

function scaleEllipse(center, scalar, horizontal, vertical){
	horizontal = horizontal * (scalar);
	vertical = vertical * (scalar);
	var ellipseSpecs = createEllipse(center, horizontal, vertical, "aquamarine");
	printEllipseGeneralForm(ellipseSpecs.center.x, ellipseSpecs.center.y, ellipseSpecs.horizontal, ellipseSpecs.vertical, "changedformula");
}

function reflectEllipse(center, axis, horizontal, vertical){
	if( axis == "y")
		center.x = center.x * -1;
	else if( axis == "x")
		center.y = center.y * -1;
	var ellipseSpecs = createEllipse(center, horizontal, vertical, "aquamarine");
	printEllipseGeneralForm(ellipseSpecs.center.x, ellipseSpecs.center.y, ellipseSpecs.horizontal, ellipseSpecs.vertical, "changedformula");
}