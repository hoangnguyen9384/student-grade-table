class PageHeader {
  constructor(headerElelment){
    this.headerElement = headerElelment;
  }
  updateAverage(newAverage){
    // console.log("newAverage: ", newAverage);
    var badgeElement = this.headerElement.querySelector("span");
    badgeElement.textContent = newAverage;
  }
}
