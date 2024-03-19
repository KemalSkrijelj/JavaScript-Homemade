//Async code example

// console.log("Start")

// setTimeout(() => {
//   console.log("This is timeout")
// }, 5000);

// console.log("End")

console.log("Start")

function loginUser(email, password) {
  return new Promise((resolve, reject) => {    
    setTimeout(() => {
      console.log("Now we have the data")
      resolve({userEmail: email})
    }, 3000);
  })
}
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(['video1', 'video2', 'video3'])
    }, 2000);
  })
}
function videoDetails(video) {
  return new Promise((resolve, reject) => {    
    setTimeout(() => {
      resolve(["2months ago","3months ago","1 month ago"])
    }, 1000);
  })
}

// const user = loginUser("kemalskrijelj6@gmail.com", 1234455, user => {
//   console.log(user);
//   getUserVideos(user.userEmail, videos => {
//     console.log(videos)
//     videoDetails(user.userEmail, details => {
//       console.log(details)
//     })
//   })
// })

// loginUser("Kemal@","kemm11")
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos))
// .then(details => console.log(details));

//SYNC code
async function displayUser(){
  try {
    const loggedUser = await loginUser('Kemal@', 'kem11')  ;
    const videos = await getUserVideos(loggedUser.userEmail);
    const details = await videoDetails(videos)
    console.log(details)    
  } catch (error) {
    console.log("Eroorrrrrr")
  }
}
displayUser()

// console.log("Finish")

//////////////////////
// const yt = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Getting staff from yt")
//     resolve({videos: [1,2,3,4,5]})
//   }, 2000);
// })
// const fb = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Getting staff from fb")
//     resolve({user: "Name"})
//   }, 5000);
// })

// Promise.all([yt,fb]).then(result => console.log(result))

