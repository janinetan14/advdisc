function printEllipseGeneralForm(h, k, horizontal, vertical, formulaLabel){
	var math = document.getElementById(formulaLabel);
	var xTerm, yTerm;
	yTerm = '\\frac{'+assignVertexY(k)+'^2}{'+vertical+'^2}';
	xTerm = '\\frac{'+assignVertexX(h)+'^2}{'+horizontal+'^2}';
	math.innerHTML = '\\[' + xTerm + '+' + yTerm +'=1\\]';
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,formulaLabel]);
}

function printParabolaGeneralForm(h, k, p, orientation, formulaLabel){
	var math = document.getElementById(formulaLabel);
	var xTerm, yTerm;
	xTerm = assignVertexX(h);
	yTerm = assignVertexY(k);
	if (orientation == "vertical"){
		math.innerHTML = '\\['+ 4*p +yTerm+ '=' + xTerm + '^2\\]';
	}
	else if (orientation == "horizontal"){
		math.innerHTML = '\\['+ 4*p +xTerm+ '=' + yTerm + '^2\\]';
	}
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,formulaLabel]);
}

function printHyperbolaGeneralForm(h, k, horizontal, vertical, orientation, formulaLabel){
	var math = document.getElementById(formulaLabel);
	var xTerm, yTerm;
	// a si horizontal, b si vertical
	if (orientation == "vertical"){
		yTerm = '\\frac{'+assignVertexY(k)+'^2}{'+vertical+'^2}';
		xTerm = '\\frac{'+assignVertexX(h)+'^2}{'+horizontal+'^2}';
		math.innerHTML = '\\[' + yTerm + '-' + xTerm +'=1\\]';
	}
	else if (orientation == "horizontal"){
		yTerm = '\\frac{'+assignVertexY(k)+'^2}{'+vertical+'^2}';
		xTerm = '\\frac{'+assignVertexX(h)+'^2}{'+horizontal+'^2}';
		math.innerHTML = '\\[' + xTerm + '-' + yTerm +'=1\\]';
	}
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,formulaLabel]);
}

function printMatrix(points, formulaLabel){
	var math = document.getElementById(formulaLabel);
	var matrixContent = '$$\\begin{bmatrix}';
	for (var i = 0; i < points.length; i++){
		matrixContent += Math.round(points[i].x * 100) / 100 + " & " + Math.round(points[i].y * 100) / 100 + '\\\\';
	}
	matrixContent += '\\end{bmatrix}$$'
	math.innerHTML = matrixContent ;
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