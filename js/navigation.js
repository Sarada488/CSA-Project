function showPage(page){

  document
    .getElementById("dashboardPage")
    .classList.add("hidden");

  document
    .getElementById("topologyPage")
    .classList.add("hidden");

  document
    .getElementById(page)
    .classList.remove("hidden");

}
