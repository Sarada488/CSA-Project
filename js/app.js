loadPlayer();
updateUI();
startScenario();

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

setInterval(

  generateAlert,

  3000

);
