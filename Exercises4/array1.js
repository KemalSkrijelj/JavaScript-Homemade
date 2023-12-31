// const videos = [
// "Pranking my sister, is she okey(gone wrong",
// "how to javascript",
// "html tutorial",
// "learning the piano"
// ];


// videos.forEach(function(video){
//   console.log("run");
//   console.log(video);
// })


//HUGHER ORDER FUNCTION
// function repeater(fn){
//   fn();
//   fn();
//   fn();
// }


// repeater(function(){
//   console.log("Hello There!");
// });

const videos = [
  "Pranking my sister, is she okey(gone wrong",
  "how to javascript",
  "html tutorial",
  "learning the piano",
  "html basics",
  "java",
  "programming",
  "ui/ux"
];

const games = [
  { title: "Mass Effect", rating:5},
  { title: "Dota", rating: 5},
  { title: "Last of Us", rating:2},
  { title: "Good of war", rating:4},
  { title: "WWE 2k20", rating:4}
];

//FOREACH

// videos.forEach(function(video){
//   console.log("run");
//   console.log(video);
// })

//MAP
// const newVideos = videos.map(function(video){
//  return video.length < 10 ? video : "nope";
// });

//FIND
const searchTutorial = videos.find(function(video){
  return video.includes("basics");
});
//FILTER
const shortSearch = videos.filter(function(video){
  return video.length < 10;
});


const highRating = games.filter(function(game){
return game.rating >9;
});

//SOME and EVERY
const checkRating = games.every (function(game){
  return game.rating > 8;
});

const someRating = games.some(function(game){
  return game.rating > 8;
});



//Ho we used to do it
const newVideos = videos.map(function(video){
  return video.toUpperCase();
 });

const arrowVideos = videos.map(video => video.toUpperCase());

//SORT
const items = ["Banana","Orange","Apple","Mango"];
const ratings = [92,56,4,2,22,45.6,10,80];

// Return is negative a is sorted before b
//Positive b is sorted before a
//if they are the same is 0 then noting changes

// const filtered = ratings.sort((a,b)=> a - b);

// console.log(ratings);

// games.sort ((a, b) => b.rating - a.rating);

//const gamesDesc = [...games];

//gamesDesc[0].rating = 0;


const name =["ed","you"];
const otherNames = ["John", "Nicolas","jovi"];

const allNames = name.concat(otherNames)

console.log(allNames);