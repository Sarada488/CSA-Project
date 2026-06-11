const alertTemplates = [

{
  severity:"CRITICAL",
  host:"DC-01",
  message:"Credential dumping",
  correctAction:"isolate"
},

{
  severity:"HIGH",
  host:"FILESERVER",

  message:"PowerShell Abuse",

  evidence:{
    process:
      "powershell.exe -enc SQBFAFgA",

    log:
      "Event ID 4104 Script Block Logging",

    network:
      "185.100.87.10:443"
  },

  explanation:
    "Encoded PowerShell commands are commonly used to hide malware.",

  correctInvestigation:
    "Process Tree",

  correctResponse:
    "Kill Process"
},

{
  severity:"MEDIUM",
  host:"HR-PC",
  message:"Suspicious login",
  correctAction:"investigate"
}

];

function generateAlert(){

  const alert =
    alertTemplates[
      Math.floor(
        Math.random() *
        alertTemplates.length
      )
    ];

  createIncident(alert);
  renderIncidents();

  renderAlert(alert);

}
function renderAlert(alert){

  const container =
    document.getElementById("alertsContainer");

  const div =
    document.createElement("div");

  div.className =
    "alert " + alert.severity.toLowerCase();

div.innerHTML = `
  <strong>${alert.severity}</strong><br>
  ${alert.host}<br>
  ${alert.message}<br><br>

  <div class="action-buttons">

    <button
      class="btn btn-investigate"
      onclick="openInvestigation('${alert.host}', '${alert.message}', this)"
    >
      Investigate
    </button>

    <button
      class="btn btn-isolate"
      onclick="handleAction('isolate', '${alert.host}', this)"
    >
      Isolate Host
    </button>

    <button
      class="btn btn-ignore"
      onclick="handleAction('ignore', '${alert.host}', this)"
    >
      Ignore
    </button>

  </div>
`;

container.prepend(div);
}
