console.log("app starting");

loadPlayer();

console.log("player loaded");

updateUI();

console.log("ui updated");

startScenario();

console.log("scenario started");

setInterval(
  generateAlert,
  3000
);

console.log("alert timer started");
document
.getElementById(
  "terminalInput"
)
.addEventListener(
  "keydown",
  function(e){

    if(e.key === "Enter"){

      runCommand(
        this.value
      );

      this.value = "";

    }

  }
);

