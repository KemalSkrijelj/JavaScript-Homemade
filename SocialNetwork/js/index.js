document.querySelector('#registracija').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'block';
})
document.querySelector('#close-modal').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'none';
})


let config = {
  'korisnicko_ime': {
    required: true,
    minlength: 5,
    maxlength: 50
  },
  'email': {
    required: true,
    email:true,
    minlength: 5,
    maxlength: 50
  },
  'lozinka': {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: 'ponovi-lozinku'
  },
  'ponovi-lozinku': {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: 'lozinka'
  },
}
let validator = new Validator(config,'#registrationForm');

document.querySelector('#registrationForm').addEventListener('submit', e => {
  e.preventDefault()

  if (validator.validationPassed()) {
    let user = new User();
    user.username = document.querySelector('#korisnicko_ime').value;
    user.email = document.querySelector('#register_email').value;
    user.password = document.querySelector('#register_lozinka').value;
    user.create();
  }else{
    alert('Polja nisu dobro popunjena')
  }
})