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
