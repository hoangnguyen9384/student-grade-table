class App {
  handleGetGradesError(error){
    console.log(error);
  }
  handleGetGradesSuccess(grades){
    console.log(grades);
  }
  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  getGrades(){
    $.ajax({
      type:"GET",
      url:"https://sgt.lfzprototypes.com/api/grades",
      data:"none",
      headers:{"X-Access-Token": "0Alc3uVl"},
      success: this.handleGetGradesSuccess(),
      error: this.handleGetGradesError()
    });
  }
  start(){
    this.getGrades();
  }
}
