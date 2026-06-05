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

    <strong>Investigation Options</strong>

    <br><br>

    <button
      onclick="investigateProcessTree('${host}')">
      Process Tree
    </button>

    <button
      onclick="investigateLogs('${host}')">
      Logs
    </button>

    <button
      onclick="investigateNetwork('${host}')">
      Network Connections
    </button>

    <div class="investigation-results"></div>

  `;

  card.appendChild(panel);

}

function investigateProcessTree(host){

  showInvestigationResult(

    host,

    `
    powershell.exe
      └── encoded command
      └── downloads payload.ps1
    `

  );

}

function investigateLogs(host){

  showInvestigationResult(

    host,

    `
    Event ID 4688
    PowerShell execution detected
    `

  );

}

function investigateNetwork(host){

  showInvestigationResult(

    host,

    `
    Connection:
    185.100.87.10:443
    Suspicious external IP
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
