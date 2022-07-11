var Student=document.getElementById("name");
var roll=document.getElementById("rollno");
var college=document.getElementById("college");
var date=document.getElementById("date");

setTimeout(addText,5000);

function addText(){
Student.innerText="[Shivtosh Dwivedi]";
roll.innerText="[201500668]";
college.innerText="GLA University,Mathura";
var Todaydate=new Date();
var month=parseInt(Todaydate.getMonth())+1;
var td=Todaydate.getDate()+'-'+month+'-'+Todaydate.getFullYear();
date.innerText=td;
}