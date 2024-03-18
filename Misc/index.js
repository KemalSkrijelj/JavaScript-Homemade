const items = ["banana","chocolate noddle", "apple", "cheesee"]

const [ba,choco,... rest] = items

console.log(rest)

const newItems = [...items, "orange", "pi"]
console.log(newItems)

//FOR OBJECTS
const user = {
  name:'Kemal',
  photos: [1,2,3,4],
  age:18,
  analytics: {
    subs: 1000,
    videos: 250,
  }
}

// const photos = user.photos

const {name,photos,age,analytics} = user;
console.log(analytics)

const {subs} = user.analytics
console.log(subs)

//IFFE
// (function library() {
//   console.log("how are you")
// })()

//OUTSIDE FUNCTION
function userNew() {
  const name = "Kemal";
  //INNER FUNCTION
  const displayName = function(greeting) {
    console.log(greeting + name)
  }
  return displayName
}
const say = userNew()
say("Ohooo")