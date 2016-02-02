
//Reporting score to Server
handlers.ReportScoreCurrentSession = function(args){
	var score = args.score;
	var currentSession = server.GetTitleData ({ Keys: [ "CurrentSeason" ] });
	currentSession = "SessionScore" + currentSession;

	var message = currentSession.Data["CurrentSeason"] + " : " + score;
	log.info (message);
	var updateUserStats = server.UpdateUserStatistics({
        PlayFabId: currentPlayerId,
        UserStatistics: {
            currentSession: score
        }
    });

	log.debug ( "User " + currentPlayerId + " submitted " + score + " score to " + currentSession);

	return { messageValue: message };
};
