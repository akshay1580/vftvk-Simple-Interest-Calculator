function compute() {
		var principal = document.getElementById("principal").value;
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var interest = principal * years * rate / 100;
		var year = new Date().getFullYear()+parseInt(years);
		var space = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
		document.getElementById("result").innerHTML = "If you deposit \<mark>"+ principal + "\</mark>,\<br>" + space + " at an interest rate of \<mark>" + rate + "%\</mark>.\<br>" + space + " You will receive an amount of \<mark>" + interest + "\</mark>,\<br>" + space + " in the year \<mark>" + year + "\</mark>.\<br>"	;
				
}

function updateRate() {
		var rateval = document.getElementById("rate").value;
		document.getElementById("rate_val").innerText=rateval+"%";
}

function keyup() {
		var val = document.getElementById("principal").value;
		if (parseInt(val) <= 0 || val == "") {
				alert("Enter a positive number");
			  document.getElementById("principal").value = "";
			  document.getElementById("principal").focus();
		} else
				compute();
}
