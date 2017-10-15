var friends = require("../data/friends");

module.exports = function(app) {
	// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // A POST routes /api/friends. This will be used to handle incoming survey results. 
  app.post("/api/friends", function(req, res) {
  	
		// This route will also be used to handle the compatibility logic.
		// Determine the user's most compatible friend using the following as a guide:
		// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
		var newUserScores = req.body.scores
		var user2 = [];
		var totalDifference = 41;
		for (var i = 0; i < friends.length; i++) {
			var newTotal = 0;
			for (var x = 0; x < user1.length; x++) {
				var difference = Math.abs(user1[x] - friends[i].score[x]);
				newTotal += difference;
				if (newTotal < totalDifference) {
					totalDifference = newTotal;
					user2.push(friends[i]);
				}
			}
		}
		friends.push(req.body);
	});
};

