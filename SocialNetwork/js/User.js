class User {
  user_id = '';
  username = '';
  email = '';
  password = '';
  api_url = 'https://660ad3cdccda4cbc75dbe2fa.mockapi.io';

  create(){
    let data = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    data = JSON.stringify(data)

   fetch(this.api_url + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
     body: data
   })
   .then(response => response.json())
   .then(data => {
    window.location.href = 'hexa.html'
  })

  }
}