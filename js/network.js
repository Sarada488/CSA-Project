const hosts = [
  {
    name:"DC-01",
    type:"Domain Controller",
    connected:["FILESERVER"]
  },
  {
    name:"FILESERVER",
    type:"Server",
    connected:["DC-01","HR-PC"]
  },
  {
    name:"HR-PC",
    type:"Workstation",
    connected:["FILESERVER"]
  }
];

function renderTopology(){

  const container =
    document.getElementById("networkMap");

  if(!container) return;

  container.innerHTML = "";

  hosts.forEach(host => {

    const card =
      document.createElement("div");

    card.className =
      "bg-slate-800 p-3 rounded mb-3";

    card.innerHTML = `
      <strong>${host.name}</strong><br>
      ${host.type}<br>
      Connected To:
      ${host.connected.join(", ")}
    `;

    container.appendChild(card);

  });

}
