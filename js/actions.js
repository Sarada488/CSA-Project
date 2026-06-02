function handleAction(action, host){

  if(action === "investigate"){
    player.xp += 10;
    player.threatScore -= 2;
    alert(`Investigating ${host}`);
  }

  if(action === "isolate"){
    player.xp += 20;
    player.threatScore -= 10;
    alert(`${host} isolated`);
  }

  if(action === "ignore"){
    player.threatScore += 15;
    alert(`Ignored ${host} - Risk increased`);
  }

  savePlayer();
  updateUI();
}
