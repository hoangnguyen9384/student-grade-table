class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }
  handleGetGradesError(error){
    console.error("error: ", error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
  }

  getGrades(){
    $.ajax({
      type:"GET",
      url:"https://sgt.lfzprototypes.com/api/grades",
      data:"none",
      headers:{"X-Access-Token": "0Alc3uVl"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start(){
    this.getGrades();
  }
}
