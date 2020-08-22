var headerElement = document.querySelector("header");
var newPageHeader = new PageHeader(headerElement);
var tableElement = document.querySelector("table");
var gradeTable = new GradeTable(tableElement);
var app = new App(gradeTable, PageHeader);
app.start();
