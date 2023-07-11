function signup(e){
  event.preventDefault();
  var username = document.querySelector('#username').value;
  var phone = document.querySelector('#phone').value;
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  var user ={
    username:username,
    phone:phone,
    email:email,
    password:password
  };

  var json = JSON.stringify(user);
  localStorage.setItem(email,json);
  alert("Dang ky thanh cong");
  window.location.href="DangNhap.html"

}


function login(e){
  event.preventDefault();

  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  var user = localStorage.getItem(email);
  var data = JSON.parse(user);
  if(user==null){
    alert("Vui lòng nhập email và password")
  }
  else if(email==data.email && password==data.password){
    alert("Đăng nhập thành công")
    window.location.href="https://yody.vn"
  }
  else{
    alert("Đăng nhập thất bại")
  }
}