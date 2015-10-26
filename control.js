var counter;
var xPoint,yPoint,xLine,yLine,x1Line,y1Line,xVector,yVector,x1Vector,y1Vector,xEllipse,yEllipse,hEllipse,vEllipse,xParabola,yParabola,mParabola,rParabola;
var xHyperbola,yHyperbola,hHyperbola,vHyperbola,rHyperbola, points;
var submitted; // 0-point, 1-line, 2- vector, 3-ellipse, 4-parabola, 5-hyperbola, 6-polygon
(function() {
	$("[name='inputButtons']").click(function(){
		$("[name='inputLabels']").hide();
		$($(this).parent()).children("[name='inputLabels']").toggle();
	});
	$("[name='transformButtons']").click(function(){
		$("[name='transformLabels']").hide();
		$($(this).parent()).children("[name='transformLabels']").toggle();
	});
	
	counter = 4;
	$("#addVertex").click(function () {
		var newTextBoxDiv = $(document.createElement('div'))
		 .attr("id", 'polygonInputs' + counter);
				
		newTextBoxDiv.after().html('<label id="X' + counter + '">X'+ counter + ' : </label>' +
			  '<input type="number" step="any" id="x' + counter + '" value="" ><br><br><label  id="Y' + counter + '">Y'+ counter + ' : </label>' +
			  '<input type="number" step="any" id="y' + counter + '" value="" ><br><br>');
		counter++;
		newTextBoxDiv.appendTo("#polygonVertices");
	});

	$("#removeVertex").click(function () {
		if(counter==4){
			alert("Minimum of 3 vertices");
			return false;
		}   
		counter--;
		$("#polygonInputs" + counter).remove();
	});
})();
	
function getPointInputs(){
	initboard();
    xPoint = document.getElementById("xPoint").value;
    yPoint = document.getElementById("yPoint").value;
    printMatrix([{"x":xPoint, "y":yPoint}], "origformula");
	createPoint(xPoint,yPoint, "blue");
    $("[name='transform']").hide();
    $("#translate").show();
    submitted = 0;
}
 
function getLineSegmentInputs(){
	initboard();
	xLine = parseFloat(document.getElementById("xLinesegment").value);
	yLine = parseFloat(document.getElementById("yLinesegment").value);
	x1Line = parseFloat(document.getElementById("x1Linesegment").value);
	y1Line = parseFloat(document.getElementById("y1Linesegment").value);
	printMatrix([{"x":xLine, "y":yLine}, {"x":x1Line, "y":y1Line}], "origformula");
	createSegment(xLine,yLine,x1Line,y1Line, "blue");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotateText").show();
    $("#shear").show();
    $("#scale").show();
    $("#reflect").show();
    submitted = 1;
}
 
function getVectorInputs(){
	initboard();
	xVector = parseFloat(document.getElementById("xVector").value);
	yVector = parseFloat(document.getElementById("yVector").value);
	x1Vector = parseFloat(document.getElementById("x1Vector").value);
	y1Vector = parseFloat(document.getElementById("y1Vector").value);
	printMatrix([{"x":xVector, "y":yVector}, {"x":x1Vector, "y":y1Vector}], "origformula");
	createVector(xVector,yVector,x1Vector,y1Vector, "blue");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotateText").show();
    $("#shear").show();
    $("#scale").show();
    $("#reflect").show();
    submitted = 2;
}
 
function getEllipseInputs(){
	initboard();
	xEllipse = parseFloat(document.getElementById("xEllipse").value);
	yEllipse = parseFloat(document.getElementById("yEllipse").value);
	hEllipse = parseFloat(document.getElementById("horizontalEllipse").value);
	vEllipse = parseFloat(document.getElementById("verticalEllipse").value);
	var ellipseSpecs = createEllipse({"x": xEllipse, "y": yEllipse}, hEllipse, vEllipse, "blue");
	printEllipseGeneralForm(ellipseSpecs.center.x, ellipseSpecs.center.y, ellipseSpecs.horizontal, ellipseSpecs.vertical, "origformula");
	$("[name='transform']").hide();
    $("#translate").show();
    $("#rotateMe").show();//static rotate only
    $("#scale").show();
    $("#reflect").show();
    submitted = 3;
}
 
function getParabolaInputs(){
	initboard();
	xParabola = parseFloat(document.getElementById("xParabola").value);
	yParabola = parseFloat(document.getElementById("yParabola").value);
    mParabola = parseFloat(document.getElementById("magnitude").value);
	rParabola = document.parabolaRad.parabolaOrientation.value;
    createParabola(xParabola,yParabola,mParabola,rParabola,"blue");
	printParabolaGeneralForm(xParabola,yParabola,mParabola,rParabola, "origformula");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotateMe").show();//static rotate only
    $("#scale").show();
    $("#reflect").show();
	
    submitted = 4;
}

function getHyperbolaInputs(){
	initboard();
	xHyperbola = parseFloat(document.getElementById("xHyperbola").value);
	yHyperbola = parseFloat(document.getElementById("yHyperbola").value);
	hHyperbola = parseFloat(document.getElementById("horizontalHyperbola").value);
    vHyperbola = parseFloat(document.getElementById("verticalHyperbola").value);
    rHyperbola = parseFloat(document.hyperbolaRad.hyperbolaOrientation.value);    
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotateMe").show();//static rotate only
    $("#scale").show();
    $("#reflect").show();
    submitted = 5;
}

function getPolygonInputs(){
	initboard();
	points = [];
	for ( var i=1; i < counter; i++ ){
		points.push({"x": parseFloat($('#x' + i).val()), "y": parseFloat($('#y' + i).val())});
	}
	createPolygon(points, "blue");
	printMatrix(points, "origformula");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotateText").show();
    $("#scale").show();
    $("#reflect").show();
	$("#shear").show();
    submitted = 6;
}

function getTranslateInputs(){
    var xTrans = parseFloat(document.getElementById("xTrans").value);
    var yTrans = parseFloat(document.getElementById("yTrans").value);
	switch(submitted){
		case 0: translatePoint(parseFloat(xPoint),parseFloat(yPoint),xTrans,yTrans); break;
		case 1: translateSegement(xLine,yLine,x1Line,y1Line,xTrans,yTrans); break;
		case 2: translateVector(xVector, yVector, x1Vector, y1Vector, xTrans, yTrans); break;
		case 3: translateEllipse({"x": xEllipse, "y": yEllipse}, xTrans, yTrans, hEllipse, vEllipse); break;
		case 4: translateParabola(xParabola,yParabola,xTrans,yTrans,mParabola,rParabola); break;
		//case 5: translate hyperbola break;
		case 6: translatePolygon(points,xTrans,yTrans); break;
    }
}

function getScaleInputs(){
    var numScale = parseFloat(document.getElementById("numScale").value);
    switch(submitted){
		case 0: break;
		case 1: scaleSegment(xLine,yLine,x1Line,y1Line,numScale); break;
		case 2: scaleVector(xVector,yVector,x1Vector,y1Vector,numScale); break;
		case 3: scaleEllipse({"x": xEllipse, "y": yEllipse}, numScale, hEllipse, vEllipse);break;
		case 4: scaleParabola(xParabola,yParabola,numScale,mParabola,rParabola); break;
		//case 5: translate hyperbola break;
		case 6: scalePolygon(points,numScale); break;
    }
}

function getShearInputs(){
    var angleShear = parseFloat(document.getElementById("angleShear").value);
	switch(submitted){
		case 0: break;
		case 1: shearSegment(xLine,yLine,x1Line,y1Line,angleShear); break;
		case 2: shearVector(xVector,yVector,x1Vector,y1Vector,angleShear); break;
		//case 3: shearEllipse break;
		//case 4: shear parabola break;
		//case 5: translate hyperbola break;
		case 6: shearPolygon(points,angleShear); break;
    }
}

function getReflectInputs(){
    var axisReflect = $('input:radio[name=reflectAxis]:checked').val();
    switch(submitted){
        case 0: break;
		case 1: reflectSegment(xLine,yLine,x1Line,y1Line,axisReflect); break;
		case 2: reflectVector(xVector,yVector,x1Vector,y1Vector,axisReflect); break;
		case 3: reflectEllipse({"x": xEllipse, "y": yEllipse}, axisReflect, hEllipse, vEllipse);break;
		case 4: reflectParabola(xParabola,yParabola,axisReflect,mParabola,rParabola); break;
		//case 5: translate hyperbola break;
		case 6: reflectPolygon(points,axisReflect); break;
    }
}

function getRotateInputs(){
	var rotationAngle;
    if(submitted==1||submitted==2||submitted==6)
        rotationAngle = parseFloat(document.getElementById("angleRotate").value);
    else
        rotationAngle = parseFloat($('input:radio[name="rotationAngle"]:checked').val());
	switch(submitted){
        case 0: break;
		case 1: rotateSegment(xLine,yLine,x1Line,y1Line,rotationAngle); break;
		case 2: rotateVector(xVector,yVector,x1Vector,y1Vector,rotationAngle); break;
		case 3: rotateEllipse({"x": xEllipse, "y": yEllipse}, rotationAngle, hEllipse, vEllipse);break;
		case 4: rotateParabola(xParabola,yParabola,rotationAngle,mParabola,rParabola); break;
		//case 5: translate hyperbola break;
		case 6: rotatePolygon(points,rotationAngle); break;
    }
}