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

  let user1 = new User();
  user1.username = document.querySelector('#korisnicko_ime').value;
  user1.email = document.querySelector('#edit_email').value;
  user1.edit();
})

document.querySelector('#deleteProfile').addEventListener('click', e => {
  e.preventDefault()
  
  let text = 'Da li ste sigurni da zelite da izbrisete profil'

  if (confirm(text) === true) {
    let user2 = new User()
    user2.delete()
  }
})

document.querySelector("#postForm").addEventListener('submit',  e => {
  e.preventDefault()

  async function createPost() {
    let content = document.querySelector('#postContent').value;
    document.querySelector('#postContent').value = ''
    let post = new Post()
    post.post_content = content
    post = await post.create();

    let current_user = new User()
    current_user = await current_user.get(session);

    let html = document.querySelector('#allPostWrapper').innerHTML
    
    let delete_post_html = '';

    if (session === post.user_id) {
      delete_post_html = ` <button class="remove-btn" onclick="removeMyPost(this)">Remove</button>` 
    }

    document.querySelector('#allPostsWrapper').innerHTML = `<div class="single-post" data-post_id="${post.id}"
                                                             <div class="post-content">${post.content}</div>

                                                              <div class = "post-actions">
                                                                <p><b>Autor:</b> ${current_user.username}</p>
                                                                <div>
                                                                 <button onclick="likePost(this)" class="likePostJS like-btn"><span>${post.likes}</span>Likes</button>
                                                                 <button class="comment-btn" onclick="commentPost(this)">Comments</button>
                                                                   ${delete_post_html}
                                                                 </div>
                                                                </div?>

                                                                 <div class="post-commments">
                                                                     <form>
                                                                       <input placeholder="Napisi komentar..." type="text">
                                                                       <button onclick="commentPostSubmit(event)">Comment</button>
                                                                     </form>
                                                                 </div>
                                                            </div>
                                                            
                                                            ` + html
  }
  createPost()
})

async function getAllPosts() {
  let allPost = new Post()
  allPost = await allPost.getAllPosts()

  
  allPost.forEach(post => {
    async function getPostUser(){

    let user = new User()
    user = await user.get(post.user_id)

    let html = document.querySelector('#allPostsWrapper').innerHTML

    let delete_post_html = '';

    if (session === post.user_id) {
      delete_post_html = ` <button class="remove-btn" onclick="removeMyPost(this)">Remove</button>` 
    }

    document.querySelector('#allPostsWrapper').innerHTML = `<div class="single-post" data-post_id="${post.id}"
                                                            <div class="post-content">${post.content}</div>

                                                             <div class = "post-actions">
                                                             <p><b>Autor:</b> ${user.username}</p>
                                                            <div>
                                                            <button onclick="likePost(this)" class="likePostJS like-btn"><span>${post.likes}</span>Likes</button>
                                                           <button class="comment-btn" onclick="commentPost(this)">Comments</button>
                                                            ${delete_post_html}
                                                         </div>
                                                       </div?>
                                                
                                                        <div class="post-commments">
                                                             <form>
                                                              <input placeholder="Napisi komentar..." type="text">
                                                              <button onclick="commentPostSubmit(event)">Comment</button>
                                                             </form>
                                                            </div>
                                                          </div> ` + html;
    }
    getPostUser()
  });
}
getAllPosts()

const commentPostSubmit = e => {
  e.preventDefault()

  let btn = e.target
  btn.setAttribute('disabled', 'true')

  let main_post_el = btn.closest('.single-post')
  let post_id = main_post_el.getAttribute('data-post-id')

  let html = main_post_el.querySelector('.post-commments').innerHTML

  let comment_value = main_post_el.querySelector('input').value;
  
  console.log(comment_value)
}

const removeMyPost = el => {

} 
const likePost = el => {

}

const commentPost = btn => {
  let main_post_el = btn.closest('.single-post')
  let post_id = main_post_el.getAttribute('data-post_id')

  main_post_el.querySelector('post-commments').style.display = 'block'
}