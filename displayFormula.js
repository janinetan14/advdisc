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