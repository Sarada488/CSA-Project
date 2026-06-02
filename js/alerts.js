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

<div class="action-buttons">

  <button
    class="btn btn-investigate"
    onclick="handleAction('investigate', '${alert.host}', this)"
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

  container.prepend(div);
}
