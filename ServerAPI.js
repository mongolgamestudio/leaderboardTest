
//Reporting score to Server
handlers.ReportScoreCurrentSession = function(args){
	var score = args.score;
	var currentSession = server.GetTitleData ({ Keys: [ "CurrentSeason" ] });
	var currentSessionID = "SessionScore" + currentSession.Data["CurrentSeason"];

	var message = currentSession.Data["CurrentSeason"] + " : " + score;
	log.info (message);

	var data = {};
	data[currentSessionID] = score;

	var playerStats = server.GetUserStatistics({
        PlayFabId: currentPlayerId
    }).UserStatistics;
  	
	var changed = false;
	if( playerStats[currentSessionID] ){
		if( parseFloat( playerStats.currentSessionID ) < parseFloat (score ) ){
			 changed = true;
			 message = message + " Exists: " + playerStats.currentSessionID );
		}
	}else{
		changed = true;
		message = message + " Not exists: " + playerStats.currentSessionID );
	}
  	
  	if(changed == true){
		var updateUserStats = server.UpdateUserStatistics({
	        PlayFabId: currentPlayerId,
	        UserStatistics: data
	    });
	}

	log.debug ( "User " + currentPlayerId + " submitted " + score + " score to " + currentSession);

	return { messageValue: message };
};
