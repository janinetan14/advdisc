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
    xPoint = document.getElementById("xPoint").value;
    yPoint = document.getElementById("yPoint").value;
    printMatrix([{"x":xPoint, "y":yPoint}], "origformula");
	createPoint(xPoint,yPoint, "blue");
    $("[name='transform']").hide();
    $("#translate").show();
    submitted = 0;
}
 
function getLineSegmentInputs(){
	xLine = parseFloat(document.getElementById("xLinesegment").value);
	yLine = parseFloat(document.getElementById("yLinesegment").value);
	x1Line = parseFloat(document.getElementById("x1Linesegment").value);
	y1Line = parseFloat(document.getElementById("y1Linesegment").value);
	printMatrix([{"x":xLine, "y":yLine}, {"x":x1Line, "y":y1Line}], "origformula");
	createSegment(xLine,yLine,x1Line,y1Line, "blue");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotate").show();
    $("#shear").show();
    $("#scale").show();
    $("#reflect").show();
    submitted = 1;
}
 
function getVectorInputs(){
	xVector = parseFloat(document.getElementById("xVector").value);
	yVector = parseFloat(document.getElementById("yVector").value);
	x1Vector = parseFloat(document.getElementById("x1Vector").value);
	y1Vector = parseFloat(document.getElementById("y1Vector").value);
	printMatrix([{"x":xVector, "y":yVector}, {"x":x1Vector, "y":y1Vector}], "origformula");
	createVector(xVector,yVector,x1Vector,y1Vector, "blue");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotate").show();
    $("#shear").show();
    $("#scale").show();
    $("#reflect").show();
    submitted = 2;
}
 
function getEllipseInputs(){
	xEllipse = parseFloat(document.getElementById("xEllipse").value);
	yEllipse = parseFloat(document.getElementById("yEllipse").value);
	hEllipse = parseFloat(document.getElementById("horizontalEllipse").value);
	vEllipse = parseFloat(document.getElementById("verticalEllipse").value);
	var ellipseSpecs = createEllipse({"x": xEllipse, "y": yEllipse}, hEllipse, vEllipse, "blue");
	printEllipseGeneralForm(ellipseSpecs.center.x, ellipseSpecs.center.y, ellipseSpecs.horizontal, ellipseSpecs.vertical, "origformula");
	$("[name='transform']").hide();
    $("#translate").show();
    $("#rotate").show();//static rotate only
    $("#scale").show();
    $("#reflect").show();
    submitted = 3;
}
 
function getParabolaInputs(){
	xParabola = parseFloat(document.getElementById("xEllipse").value);
	yParabola = parseFloat(document.getElementById("yEllipse").value);
    mParabola = parseFloat(document.getElementById("magnitude").value);
	rParabola = document.parabolaRad.parabolaOrientation.value;
    createParabola(xParabola,yParabola,mParabola,rParabola,"blue");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotate").show();//static rotate only
    $("#scale").show();
    $("#reflect").show();
    submitted = 4;
}

function getHyperbolaInputs(){
	xHyperbola = parseFloat(document.getElementById("xHyperbola").value);
	yHyperbola = parseFloat(document.getElementById("yHyperbola").value);
	hHyperbola = parseFloat(document.getElementById("horizontalHyperbola").value);
    vHyperbola = parseFloat(document.getElementById("verticalHyperbola").value);
    rHyperbola = parseFloat(document.hyperbolaRad.hyperbolaOrientation.value);    
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotate").show();//static rotate only
    $("#scale").show();
    $("#reflect").show();
    submitted = 5;
}

function getPolygonInputs(){
	points = [];
	for ( var i=1; i < counter; i++ ){
		points.push({"x": parseFloat($('#x' + i).val()), "y": parseFloat($('#y' + i).val())});
	}
	//createPolygon([{"x":0, "y":0},{"x":0, "y":1}, {"x":1, "y":1}, {"x":1, "y":0}]);
	createPolygon(points, "blue");
	printMatrix(points, "origformula");
    $("[name='transform']").hide();
    $("#translate").show();
    $("#rotate").show();//static rotate only
    $("#scale").show();
    $("#reflect").show();
    submitted = 6;
}
function getTranslateInputs()
{
    xTrans = parseFloat(document.getElementById("xTrans").value);
    yTrans = parseFloat(document.getElementById("yTrans").value);
    if(submitted == 0)
    {
        translatePoint(parseFloat(xPoint),parseFloat(yPoint),xTrans,yTrans);
    }
    else if(submitted == 1)
    {
        translateSegement(xLine,yLine,x1Line,y1Line,xTrans,yTrans);
    }
    else if(submitted == 2)
    {
        //translate vector
    }
    else if(submitted == 3)
    {
        ellipse
    }
    else if(submitted == 4)
    {
        translateParabola(xParabola,yParabola,xTrans,yTrans,mParabola,rParabola);
    }
    else if(submitted == 5)
    {
        hyperbola
    }
    else if(submitted == 6)
    {
        translatePolygon(points,xTrans,yTrans);
    }
    
}