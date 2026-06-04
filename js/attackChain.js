let currentStage = 0;

const attackChain = [

  "Suspicious Login",

  "PowerShell Abuse",

  "Credential Dumping",

  "Domain Controller Access"

];

function advanceAttack(){

  currentStage++;

  if(currentStage >= attackChain.length){
    currentStage = attackChain.length - 1;
  }

  document.getElementById(
    "attackStage"
  ).textContent =
    attackChain[currentStage];

}
