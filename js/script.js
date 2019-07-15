var century, year, month, date;

document.getElementById('mainForm').onsubmit = function getName() { console.log(document.getElementById('mainForm').value);

var dob = document.getElementById('dob').value;//get the year input from html form.

century = dob.slice(0,2);//to pick the first two digits of the year input.
year = dob.slice(2,4);//to pick the last two values of the year input.
month = document.getElementById('month').value;//get user input
date = document.getElementById('day').value;

var gender = document.querySelector('input[name = "gender"]:checked').value;//get value of the checked radio button.



}
