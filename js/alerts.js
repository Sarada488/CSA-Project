const alertTemplates = [

{
  severity:"CRITICAL",
  host:"DC-01",
  message:"Credential dumping"
},

{
  severity:"HIGH",
  host:"FILESERVER",
  message:"PowerShell abuse"
},

{
  severity:"MEDIUM",
  host:"HR-PC",
  message:"Suspicious login"
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

    <button onclick="handleAction('investigate', '${alert.host}')">
      Investigate
    </button>

    <button onclick="handleAction('isolate', '${alert.host}')">
      Isolate Host
    </button>

    <button onclick="handleAction('ignore', '${alert.host}')">
      Ignore
    </button>
  `;

  container.prepend(div);
}
