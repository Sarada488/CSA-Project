function runCommand(cmd){

  cmd = cmd.trim();

  if(cmd === "help"){

    alert(
      "Commands:\nscan\nstatus"
    );

  }

  if(cmd === "status"){

    alert(
      "Threat Score: " +
      player.threatScore
    );

  }

}
