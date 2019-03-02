setInterval(timer, 1000);
var time = 20;

function timer()
{
	if (time > 0){
		time -= 1;
		document.getElementById('time').innerHTML = time;
	}else{
		window.location.href = "quiz.html";
	}
}

function add(a, b)
{
	var c = a + b;
	var str = "new ans is ";
	var d = str + c;

	document.getElementById('result').innerHTML = d;
	//return d;
}

function quiz(ans)
{
	var d = "you selected " + ans;
	if(ans == "a"){
		d = d + " <a href='problem2.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz2(ans)
{
	var d = "you selected " + ans;
	if(ans == "b"){
		d = d + " <a href='problem3.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz3(ans)
{
	var d = "you selected " + ans;
	if(ans == "b"){
		d = d + " <a href='problem4.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz4(ans)
{
	var d = "you selected " + ans;
	if(ans == "b"){
		d = d + " <a href='problem5.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz5(ans)
{
	var d = "you selected " + ans;
	if(ans == "a"){
		d = d + " <a href='problem6.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz6(ans)
{
	var d = "you selected " + ans;
	if(ans == "c"){
		d = d + " <a href='problem7.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz7(ans)
{
	var d = "you selected " + ans;
	if(ans == "b"){
		d = d + " <a href='problem8.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz8(ans)
{
	var d = "you selected " + ans;
	if(ans == "c"){
		d = d + " <a href='problem9.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz9(ans)
{
	var d = "you selected " + ans;
	if(ans == "a"){
		d = d + " <a href='problem10.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz10(ans)
{
	var d = "you selected " + ans;
	if(ans == "b"){
		d = d + " <a href='problem11.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz11(ans)
{
	var d = "you selected " + ans;
	if(ans == "a"){
		d = d + " <a href='problem12.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz12(ans)
{
	var d = "you selected " + ans;
	if(ans == "b"){
		d = d + " <a href='problem13.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz13(ans)
{
	var d = "you selected " + ans;
	if(ans == "a"){
		d = d + " <a href='problem14.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz14(ans)
{
	var d = "you selected " + ans;
	if(ans == "c"){
		d = d + " <a href='problem15.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}

function quiz15(ans)
{
	var d = "you selected " + ans;
	if(ans == "b"){
		d = d + " <a href='congradulations.html'>next</a>";
		document.getElementById('result').innerHTML = d;
	}else{
		d = d + " <a href='quiz.html'>wrong</a>";
		document.getElementById('result').innerHTML = d;
	}
}
