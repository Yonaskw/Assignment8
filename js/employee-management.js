
/*eslint-env browser*/
window.onload = showEmployees;
var submit = document.getElementById("btn");
submit.onclick=addEmployee;


var employeeList  = [
		["Mark Cuban", "CEO", 214],
		["Daymond John", "Founder", 718],
		["Kevin O'Leary", "Investor", 514],
		["Lori Greiner", "Inventor", 773],
		["Robert Herjavec", "Engineer", 313],
]


function showEmployees() {
	var html_code = ""
	for (var i = 0; i < employeeList .length; i++) {
		var employeeNew = employeeList [i];
		html_code += '<tr><td>'+employeeNew[0]+'</td><td>'+employeeNew[1]+'</td><td>'+employeeNew[2]+ 
		'</td><td><button onclick="deleteEmployee('+i+')">Delete</button></td></tr>';
	}
	document.querySelector("tbody").innerHTML = html_code;
	document.getElementById("EmployeeCount").innerHTML = employeeList .length;
}

function deleteEmployee(n) {
	employeeList .splice(n, 1);
	showEmployees();
}

function addEmployee () {
    "use strict";
    var name, title, extension, employee = [];
       
    name = document.getElementById("employeName").value;
	title = document.getElementById("employeTitle").value;
	extension = document.getElementById("employeEx").value;
      
    if (name === "") {
        alert("Please provide your name!");
        return false;
    } else {   
        employee.push(name);
    }
    
    if (title === "") {
        alert("Please provide your title!");
        return false;
    } else {
        
        employee.push(title);
    }
    
    if (extension === "") {
        alert("Please provide the extension!");
        return false;
    }

    employeeList.push([name, title, extension]);
    
    showEmployees();
   
  
};