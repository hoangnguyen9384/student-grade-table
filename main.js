var formElement = document.querySelector("form");
var newGradeForm = new GradeForm(formElement);

var headerElement = document.querySelector("header");
var newPageHeader = new PageHeader(headerElement);
var tableElement = document.querySelector("table");

var p = document.querySelector("p");
var gradeTable = new GradeTable(tableElement, p);

var app = new App(gradeTable, newPageHeader, newGradeForm);
app.start();
