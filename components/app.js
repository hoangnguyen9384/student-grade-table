class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error("error: ", error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var totalGrades = 0;
    for(var i=0; i<grades.length; i++){
      totalGrades += grades[i].grade;
    }
    var average = totalGrades/grades.length;
    this.pageHeader.updateAverage(average);
  };

  getGrades(){
    $.ajax({
      type:"GET",
      url:"https://sgt.lfzprototypes.com/api/grades",
      headers:{"X-Access-Token": "0Alc3uVl"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade){
    $.ajax({
      type: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "0Alc3uVl" },
      data: { "name": name,
              "course": course,
              "grade": grade,
            },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  }
  handleCreateGradeError(error){
    console.error("error: ", error);
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
}
