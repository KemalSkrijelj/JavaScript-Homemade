// let session = new Session()
// session = session.getSession()

// if (session !== "") {

//   async function populateUserData() {
//     let user = new User()
//     data = await user.get(session)

//     document.querySelector('#username').innerText = user['username']
//     document.querySelector('#email').innerText = user['email']
       
//     document.querySelector('#korisnicko_ime').value = user['username'];
//     document.querySelector('#edit_email').value = user['email'];

//   }

// populateUserData()
// }else{
//   window.location.href = '/';
// }

document.querySelector('#logout').addEventListener('click', e => {
  e.preventDefault()
  session.destroySession()
  window.location.href = '/'
})

document.querySelector('#editAccount').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'block';
})
document.querySelector('#close-modal').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'none';
})
document.querySelector('#editForm').addEventListener('submit', e => {
  e.preventDefault()

  let user = new User();
  user.username = document.querySelector('#korisnicko_ime').value;
  user.email = document.querySelector('#edit_email').value;
  user.edit();
})

document.querySelector('#deleteProfile').addEventListener('click', e => {
  e.preventDefault()
  
  let text = 'Da li ste sigurni da zelite da izbrisete profil'

  if (confirm(text) === true) {
    let user = new User()
    user.delete()
  }
})

document.querySelector("#postForm").addEventListener('submit',  e => {
  e.preventDefault()

  async function createPost() {
    let content = document.querySelector('#postContent').value;
    let post = new Post()
    post.content = content
    post = await post.create();

    console.log(post)
  }
})