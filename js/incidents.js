const incidents = [];

function createIncident(alert){

  incidents.push({

    id: Date.now(),

    severity: alert.severity,

    host: alert.host,

    status: "Open"

  });

}

function renderIncidents(){

  const container =
    document.getElementById(
      "incidentContainer"
    );

  if(!container) return;

  container.innerHTML = "";

  incidents.forEach(incident => {

    const div =
      document.createElement("div");

    div.className =
      "bg-slate-800 p-3 rounded mb-2";

    div.innerHTML = `
      ${incident.host}
      (${incident.severity})
      - ${incident.status}
    `;

    container.appendChild(div);

  });

}
