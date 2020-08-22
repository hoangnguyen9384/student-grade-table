class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;

  }
  updateGrades(grades){

    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = " ";
    for (var i=0; i<grades.length; i++){
      var tr = document.createElement("tr");

      var studentName = document.createElement("td");
      studentName.textContent = grades[i].name;

      var studentCourse = document.createElement("td");
      studentCourse.textContent = grades[i].course;

      var studentGrade = document.createElement("td");
      studentGrade.textContent = grades[i].grade;

      tr.append(studentName, studentCourse, studentGrade);
      tbody.append(tr);
    }
  }
}
