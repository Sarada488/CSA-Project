let player = {

  xp:0,

  level:1,

  threatScore:100,

  incidentsResolved:0

};

function savePlayer(){

  localStorage.setItem(
    "player",
    JSON.stringify(player)
  );

}

function loadPlayer(){

  const saved =
    localStorage.getItem("player");

  if(saved){

    player = JSON.parse(saved);

  }

}
