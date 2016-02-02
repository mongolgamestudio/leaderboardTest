
//Reporting score to Server
handlers.ReportScoreCurrentSession = function(args){
	var score = args.score;
	var currentSession = server.GetTitleData ({ Keys: [ "CurrentSeason" ] });
	var currentSessionID = "SessionScore" + currentSession.Data["CurrentSeason"];

	var message = currentSession.Data["CurrentSeason"] + " : " + score;
	log.info (message);
	var updateUserStats = server.UpdateUserStatistics({
        PlayFabId: currentPlayerId,
        UserStatistics: {
            currentSessionID: score
        }
    });

	log.debug ( "User " + currentPlayerId + " submitted " + score + " score to " + currentSession);

	return { messageValue: message };
};
