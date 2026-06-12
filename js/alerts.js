const alertTemplates = [

  {
    severity: "CRITICAL",

    host: "DC-01",

    message: "Credential Dumping",

    tactic: "Credential Access",

    evidence: {
      programs:
        "Mimikatz process detected in memory.",

      logs:
        "LSASS memory access recorded.",

      network:
        "No suspicious traffic detected."
    },

    recommendation:
      "Reset User Password",

    correctResponse:
      "reset"
  },

  {
    severity: "HIGH",

    host: "FILESERVER",

    message: "PowerShell Abuse",

    tactic: "Execution",

    evidence: {
      programs:
        "Encoded PowerShell command detected.",

      logs:
        "Event ID 4104 Script Block Logging triggered.",

      network:
        "Normal outbound traffic."
    },

    recommendation:
      "Stop Malicious Program",

    correctResponse:
      "kill"
  },

  {
    severity: "MEDIUM",

    host: "HR-PC",

    message: "Suspicious Login",

    tactic: "Initial Access",

    evidence: {
      programs:
        "No suspicious programs found.",

      logs:
        "50 failed login attempts followed by success.",

      network:
        "Normal traffic."
    },

    recommendation:
      "Reset User Password",

    correctResponse:
      "reset"
  },

  {
    severity: "HIGH",

    host: "FILESERVER",

    message: "Data Exfiltration",

    tactic: "Exfiltration",

    evidence: {
      programs:
        "No suspicious processes found.",

      logs:
        "Large archive file created.",

      network:
        "5GB transferred to unknown external IP."
    },

    recommendation:
      "Block Attacker IP",

    correctResponse:
      "block"
  },

  {
    severity: "HIGH",

    host: "DC-01",

    message: "Lateral Movement",

    tactic: "Lateral Movement",

    evidence: {
      programs:
        "PsExec process observed.",

      logs:
        "Remote service creation detected.",

      network:
        "Multiple internal SMB connections."
    },

    recommendation:
      "Isolate Host",

    correctResponse:
      "isolate"
  }

];



function getRandomAlert(){

  return alertTemplates[
    Math.floor(
      Math.random() *
      alertTemplates.length
    )
  ];

}



function generateAlert(){

  const container =
    document.getElementById(
      "alertsContainer"
    );

  // maximum 5 alerts

  if(container.children.length >= 5){

    return;

  }

  const alert =
    structuredClone(
      getRandomAlert()
    );

  createIncident(alert);

  renderIncidents();

  renderAlert(alert);

}



function renderAlert(alert){

  const container =
    document.getElementById(
      "alertsContainer"
    );

  const div =
    document.createElement("div");

  div.className =
    "alert " +
    alert.severity.toLowerCase();

  div.alertData = alert;

  div.innerHTML = `

    <strong>${alert.severity}</strong>

    <br>

    Host:
    ${alert.host}

    <br>

    Alert:
    ${alert.message}

    <br>

    Tactic:
    ${alert.tactic}

    <br><br>

    <div class="action-buttons">

      <button
        class="btn btn-investigate"
        onclick="openInvestigation(this)"
      >
        Investigate
      </button>

      <button
        class="btn btn-isolate"
        onclick="handleAction(
          'isolate',
          '${alert.host}',
          this
        )"
      >
        Isolate Host
      </button>

      <button
        class="btn btn-ignore"
        onclick="handleAction(
          'ignore',
          '${alert.host}',
          this
        )"
      >
        Ignore
      </button>

    </div>

  `;

  container.prepend(div);

}
