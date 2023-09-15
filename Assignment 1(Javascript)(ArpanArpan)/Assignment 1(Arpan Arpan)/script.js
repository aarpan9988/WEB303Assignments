/*
	WEB 303 Assignment 1 - jQuery
	{Arpan Arpan}
*/
 

$(document).ready(function()
{
$("input").change(function() //changing the required fields(salary/percent)
{
 let mySalary= $("#yearly-salary").val();
 let percent= $("#percent").val();


 let result=((mySalary*percent)/100).toFixed(2); // to round of the numbers to remove extra decimals
 $("#amount").text("$" + result);

});
});

