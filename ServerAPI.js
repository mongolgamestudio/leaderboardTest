
//handlers.Test = function (args){
//	 var message = "Hello " + currentPlayerId + "!";
//	 return { messageValue: message };
//};

handlers.ReportScoreCurrentSession = function(args){
	var score = args.score;
	var currentSession = server.GetTitleData ({ Keys: [ "CurrentSeason" ] });
	log.info (currentSession);
	var message = currentSession.Data["CurrentSeason"] + " : " + score;
	log.info (message);
	return { messageValue: message };
//	var updateUserDataResult = server.UpdateUserInternalData({
//        PlayFabId: currentPlayerId,
//        Data: {
//            lastLevelCompleted: level
//        }
//    });

};
