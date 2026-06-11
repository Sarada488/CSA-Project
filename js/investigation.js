function openInvestigation(host, alertType, button){

  const card =
    button.closest(".alert");

  const existing =
    card.querySelector(".investigation-panel");

  if(existing){
    return;
  }

  const panel =
    document.createElement("div");

  panel.className =
    "investigation-panel";

panel.innerHTML = `

<hr>

<strong>Investigate Alert</strong>

<br><br>

<button
  class="investigation-btn"
  onclick="investigateProcessTree('${host}')">
  Check Running Programs
</button>

<button
  class="investigation-btn"
  onclick="investigateLogs('${host}')">
  Review Security Events
</button>

<button
  class="investigation-btn"
  onclick="investigateNetwork('${host}')">
  Check Internet Traffic
</button>

<div class="investigation-results"></div>

<hr>

<strong>Choose Response</strong>

<br><br>

<button
  class="response-btn"
  onclick="killProcess('${host}')">
  Stop Malicious Program
</button>

<button
  class="response-btn"
  onclick="blockIP('${host}')">
  Block Attacker IP
</button>

<button
  class="response-btn"
  onclick="resetCredentials('${host}')">
  Reset User Password
</button>

`;

  card.appendChild(panel);

}

function investigateProcessTree(host){

  showInvestigationResult(
    host,
    "Suspicious program found. The program appears to be running hidden commands that may download malware."
  );

}

function investigateLogs(host){

  showInvestigationResult(

    host,

    `
    Security events show a script running on this computer.

    This often indicates malware activity.
    `

  );

}

function investigateNetwork(host){

  showInvestigationResult(

    host,

    `
    This computer is communicating with an unknown internet address.

    This may be attacker-controlled infrastructure.
    `

  );

}

function showInvestigationResult(host, text){

  const results =
    document.querySelector(
      ".investigation-results"
    );

  results.innerHTML =
    `<pre>${text}</pre>`;

  
}

function killProcess(host){

  player.xp += 10;

  addResponseMessage(
    "Malicious process terminated."
  );

}


function blockIP(host){

  player.xp += 15;

  addResponseMessage(
    "IP blocked at firewall."
  );

}

function resetCredentials(host){

  player.xp += 20;

  addResponseMessage(
    "User credentials reset."
  );

}

panel.innerHTML += `

<hr>

<strong>Response Actions</strong>

<br><br>

<button
  onclick="killProcess('${host}')">
  Kill Process
</button>

<button
  onclick="blockIP('${host}')">
  Block IP
</button>

<button
  onclick="resetCredentials('${host}')">
  Reset Password
</button>

`;
