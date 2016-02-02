
//handlers.Test = function (args){
//	 var message = "Hello " + currentPlayerId + "!";
//	 return { messageValue: message };
//};

handlers.ReportScoreCurrentSession = function(args){
	var score = args.score;
	var currentSession = server.GetTitleData ({ Keys: [ "CurrentSeason" ] });
	log.info (currentSession);
	log.info (currentSession.data.Data.CurrentSeason + " : " + score);
	var message = currentSession.data.Data.CurrentSeason + " : " + score;

	return { messageValue: message };
//	var updateUserDataResult = server.UpdateUserInternalData({
//        PlayFabId: currentPlayerId,
//        Data: {
//            lastLevelCompleted: level
//        }
//    });

};
