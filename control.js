(function() {
	
	$("[name='inputButtons']").click(function(){
		$("[name='inputLabels']").hide();
		$($(this).parent()).children("[name='inputLabels']").toggle();
	});
	
	$("[name='transformButtons']").click(function(){
		$("[name='transformLabels']").hide();
		$($(this).parent()).children("[name='transformLabels']").toggle();
	});
	
	var counter = 4;
	
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

	function getPolygonInputs() 
	{
		for(i=1; i<counter; i++)
		{
			$('#x' + i).val();
			$('#y' + i).val();
		}
	}
})();
	
function getPointInputs(){
	var x = parseFloat(document.getElementById("xPoint").value);
	var y = parseFloat(document.getElementById("yPoint").value);
	createPoint(x,y, "blue");
	$("#translate").show();
}

function getLineSegmentInputs(){
	var x = parseFloat(document.getElementById("xLinesegment").value);
	var y = parseFloat(document.getElementById("yLinesegment").value);
	var x1 = parseFloat(document.getElementById("x1Linesegment").value);
	var y1 = parseFloat(document.getElementById("y1Linesegment").value);
	createSegment(x,y,x1,y1, "blue");
}

function getVectorInputs(){
	var x = parseFloat(document.getElementById("xVector").value);
	var y = parseFloat(document.getElementById("yVector").value);
	var x1 = parseFloat(document.getElementById("x1Vector").value);
	var y1 = parseFloat(document.getElementById("y1Vector").value);
	createVector(x,y,x1,y1, "blue");
	createPolygon([{"x":0, "y":0},{"x":0, "y":1}, {"x":1, "y":1}, {"x":1, "y":0}]);
}

function getEllipseInputs(){
	var xValue = parseFloat(document.getElementById("xEllipse").value);
	var yValue = parseFloat(document.getElementById("yEllipse").value);
	var horizontal = parseFloat(document.getElementById("horizontalEllipse").value);
	var vertical = parseFloat(document.getElementById("verticalEllipse").value);
	var ellipseSpecs = createEllipse({"x": xValue, "y": yValue}, horizontal, vertical, "blue");
	ellipseGeneralForm(ellipseSpecs.center.x, ellipseSpecs.center.y, ellipseSpecs.horizontal, ellipseSpecs.vertical, "origformula");
}

function getParabolaInputs(){
	var xValue = parseFloat(document.getElementById("xEllipse").value);
	var yValue = parseFloat(document.getElementById("yEllipse").value);
	var radVal = document.test.parabolaOrientation.value;
}

function getHyperbolaInputs(){
	var xValue = parseFloat(document.getElementById("xHyperbola").value);
	var yValue = parseFloat(document.getElementById("yHyperbola").value);
}