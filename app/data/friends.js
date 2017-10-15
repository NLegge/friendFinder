// You should save your application's data inside of app/data/friends.js as an array of objects. 

var friends = [
  {
  	name:"Ahmed",
  	photo:"https://pbs.twimg.com/profile_images/629686624008278020/aZA3c3RX.jpg",
  	scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
	}
];

// This makes it accessible to other files using require.
module.exports = friends;