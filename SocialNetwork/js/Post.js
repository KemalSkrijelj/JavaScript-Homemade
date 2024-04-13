class Post {
  post_id = "";
  post_content = ""
  user_id = ""
  likes = ""
  api_url = 'https://660ad3cdccda4cbc75dbe2fa.mockapi.io'

  async create(){
   let session_id = new Session()
   session = session_id.getSession()

   let data = {
    user_id: session,
    content: this.post_content,
    likes: 0 
   }
   data = JSON.stringify(data)
   
   let response = await fetch(this.api_url + '/posts', {
    method:'POST',
    headers:{
     'Content-Type':'application/json'
    },
    body:data
   });
   data = await response.json()
   return data
  }
  
  async getAllPosts(){
    let response = await fetch(this.api_url + '/posts')
    let data = await response.json()
    return data
  }

  like(post_id, likes){
     let data = {
       likes: likes
     }
     data = JSON.stringify(data)
     
     fetch(this.api_url + '/posts/' + this.post_id, {
      method:"PUT",
      headers:{
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(response => response.json())
    .then(data => {alert("Post lajkovan")})
  }


  delete(){
    fetch(this.api_url + '/posts/' + this.post_id, {
      method:"DELETE"
    })
    .then(response => response.json())
    .then(data => {
      alert('Post obrisan')
    })
  }
}
