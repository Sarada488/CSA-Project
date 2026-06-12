function processResponse(
  button,
  action
){

  const card =
    button.closest(".alert");

  const alert =
    card.alertData;

  const correct =

    action ===
    alert.correctResponse;

  let message = "";

  if(correct){

    player.xp += 20;

    player.threatScore -= 10;

    if(player.threatScore < 0){
      player.threatScore = 0;
    }

    message = `

      INCIDENT RESOLVED

      Threat:
      ${alert.message}

      Host:
      ${alert.host}

      Correct Response:
      ${alert.recommendation}

      XP +20

    `;

    alert(message);

    card.remove();

  }

  else{

    player.threatScore += 15;

    message = `

      Incorrect Response

      The threat remains active.

      Threat Score +15

      Review the investigation findings.

    `;

    alert(message);

  }

  updateUI();

  checkLossCondition();

}



function handleAction(
  action,
  host,
  button
){

  const card =
    button.closest(".alert");

  if(action === "ignore"){

    player.threatScore += 20;

    updateUI();

    checkLossCondition();

    alert(
      "Alert ignored. Threat level increased."
    );

    return;

  }

  if(action === "isolate"){

    player.threatScore += 5;

    updateUI();

    checkLossCondition();

    alert(
      "Host isolated.\n\nFurther investigation is still required."
    );

  }

}
