function openInvestigation(button){

  const card =
    button.closest(".alert");

  const alert =
    card.alertData;

  const existing =
    card.querySelector(
      ".investigation-panel"
    );

  if(existing){
    return;
  }

  const panel =
    document.createElement("div");

  panel.className =
    "investigation-panel";

  panel.innerHTML = `

    <hr>

    <h4>
      Investigation Options
    </h4>

    <br>

    <button
      class="investigation-btn"
      onclick="investigatePrograms(this)"
    >
      Check Running Programs
    </button>

    <button
      class="investigation-btn"
      onclick="investigateLogs(this)"
    >
      Review Security Events
    </button>

    <button
      class="investigation-btn"
      onclick="investigateNetwork(this)"
    >
      Check Internet Traffic
    </button>

    <div
      class="investigation-results"
      style="margin-top:15px;"
    >
    </div>

  `;

  card.appendChild(panel);

}



function investigatePrograms(button){

  const card =
    button.closest(".alert");

  const alert =
    card.alertData;

  showInvestigationResult(
    card,
    "Programs",
    alert.evidence.programs,
    alert.recommendation
  );

}



function investigateLogs(button){

  const card =
    button.closest(".alert");

  const alert =
    card.alertData;

  showInvestigationResult(
    card,
    "Security Events",
    alert.evidence.logs,
    alert.recommendation
  );

}



function investigateNetwork(button){

  const card =
    button.closest(".alert");

  const alert =
    card.alertData;

  showInvestigationResult(
    card,
    "Internet Traffic",
    alert.evidence.network,
    alert.recommendation
  );

}



function showInvestigationResult(
  card,
  category,
  evidence,
  recommendation
){

  const results =
    card.querySelector(
      ".investigation-results"
    );

  results.innerHTML = `

    <div class="feedback success">

      <strong>
        ${category}
      </strong>

      <br><br>

      ${evidence}

      <br><br>

      <strong>
        Recommended Action:
      </strong>

      ${recommendation}

      <br><br>

      <strong>
        Response Actions
      </strong>

      <br><br>

      <button
        class="response-btn"
        onclick="killProcess(this)"
      >
        Stop Malicious Program
      </button>

      <button
        class="response-btn"
        onclick="blockIP(this)"
      >
        Block Attacker IP
      </button>

      <button
        class="response-btn"
        onclick="resetCredentials(this)"
      >
        Reset User Password
      </button>

      <button
        class="response-btn"
        onclick="isolateHost(this)"
      >
        Isolate Host
      </button>

    </div>

  `;

}



function killProcess(button){

  processResponse(
    button,
    "kill"
  );

}



function blockIP(button){

  processResponse(
    button,
    "block"
  );

}



function resetCredentials(button){

  processResponse(
    button,
    "reset"
  );

}



function isolateHost(button){

  processResponse(
    button,
    "isolate"
  );

}
