const incidents = [];

function createIncident(alert){

  incidents.push({

    id: Date.now(),

    severity: alert.severity,

    host: alert.host,

    status: "Open"

  });

}
