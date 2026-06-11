function handleAction(action, host, button){

  const alertCard =
    button.closest(".alert");

  let result = "";
  let correct = false;

  if(host === "DC-01"){

    if(action === "isolate"){
      correct = true;
      networkHosts[host].isolated = true;
      result =
        "Risk decreased! Domain Controller contained.";
    }

  } else if(host === "FILESERVER"){

    if(action === "investigate"){
      correct = true;
      result =
        "Risk decreased! Investigation revealed malicious PowerShell.";
    }

  } else {

    if(action === "investigate"){
      correct = true;
      result =
        "Risk decreased! Further analysis required.";
    }

  }

  if(!correct){

    result =
      "Threat level increased.";
  }

  const feedback =
    document.createElement("div");

  feedback.className =
    correct
      ? "feedback success"
      : "feedback failure";

  feedback.textContent = result;

  alertCard.appendChild(feedback);

  const buttons =
    alertCard.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
  });


}

function resolveAlert(alertCard){

  alertCard.style.opacity = "0.5";

  setTimeout(() => {

    alertCard.remove();

  }, 1000);

}
