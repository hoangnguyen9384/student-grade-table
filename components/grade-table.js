class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades){

    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = " ";
    for (var i=0; i<grades.length; i++){
      var updated = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.appendChild(updated);
    }
    if (grades === null) {
      var pElement = document.getElementsByClassName("d-none");
      pElement.classList.remove("d-none");
    }
  }

  onDeleteClick(deleteGrade){
    deleteGrade = this.deleteGrade;
  }

  renderGradeRow(grade, deleteGrade){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    tr.append(td1, td2, td3, td4);
    td1.textContent = grade.name;
    td2.textContent = grade.course;
    td3.textContent = grade.grade;

    var button = document.createElement("button");
    button.type = "button";
    button.classList = "btn";
    td4.appendChild(button);
    button.textContent = "DELETE";
    button.addEventListener("click", function(){deleteGrade(grade.id)});
    return tr;
  }

}
