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
    if (grades.length === 0) {
      var pElement = document.getElementById("hidden-p");
      pElement.classList.remove("d-none");
    }
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    tr.append(td1, td2, td3, td4);
    td1.textContent = data.name;
    td2.textContent = data.course;
    td3.textContent = data.grade;

    var button = document.createElement("button");
    button.type = "button";
    button.classList = "btn";
    td4.appendChild(button);
    button.textContent = "DELETE";
    button.addEventListener("click", function(){deleteGrade(data.id)});

    return tr;
  }


}
