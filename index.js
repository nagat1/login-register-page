var emailinput = document.getElementById("emailinput");
var passwordinput = document.getElementById("passwordinput");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var loginbutton = document.getElementById("loginbutton");
var signupbutton = document.getElementById("signupbutton");
var signup = document.getElementById("signup");
var signinbutton = document.getElementById("signinbutton");
var login = document.getElementById("login");
var register = document.getElementById("register");
var homepage = document.getElementById("homepage");
var warning = document.getElementById("warning");
var arr;
if (localStorage.getItem("list") == null) arr = [];
else {
  arr = [JSON.parse(localStorage.getItem("list"))];
}
// register...............
signupbutton.onclick = function () {
  add();
  if (validate(input1) && validate(input2) && validate(input3)) {
    clear();
    display();
  }
};
signinbutton.onclick = function () {
  display();
};

function add() {
  if (validate(input1) && validate(input2) && validate(input3)) {
    var obj = {
      name: input1.value,
      email: input2.value,
      password: input3.value,
    };
    arr.push(obj);
    localStorage.setItem("list", JSON.stringify(arr));
    console.log(arr);
  }
}

function display() {
  login.classList.replace("d-none", "d-block");
  register.classList.replace("d-block", "d-none");
}

function clear() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

function validate(ele) {
  var regex = {
    input1: /^[\w]{3,10}$/,
    input2: /^[a-zA-z]{4,15}(\@)(gmail|yahoo)(\.com)$/,
    input3: /^.{5,15}$/,
  };
  if (regex[ele.id].test(ele.value)) {
    console.log("match");
    ele.nextElementSibling.classList.replace("d-block", "d-none");
    ele.classList.remove("is-invalid");
    ele.classList.add("is-valid");
    return true;
  } else {
    console.log("not match");
    ele.nextElementSibling.classList.replace("d-none", "d-block");
    ele.classList.add("is-invalid");
    ele.classList.remove("is-valid");
    return false;
  }
}
// ....................................................
// login

signup.onclick = function () {
  display2();
};
function display2() {
  register.classList.replace("d-none", "d-block");
  login.classList.replace("d-block", "d-none");
}
loginbutton.onclick = function () {
  if (check() == true) {
    clear2();
    console.log("welcome");
    display3();
  } else {
    var box = `   <div class="alert alert-danger p-2 ">
<small class="fw-bolder">Invalid email OR Password</small>
</div> `;
    warning.innerHTML = box;
  }
};

function check() {
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i].email == emailinput.value &&
      arr[i].password == passwordinput.value
    ) {
      console.log("match");

      return true;
    } else {
      return false;
    }
  }
}

function display3(i) {
  //homepage

  var box = `   
  <div class="home text-center">
  <div class="fs-2 fw-bolder p-5">welcome to our page${input1.value}</div>
  <div class="button badge position-absolute">
    <a href="http://127.0.0.1:5500/">Log out</a>
  </div>
</div>
`;
  homepage.innerHTML = box;
  register.classList.replace("d-none", "d-none");
  login.classList.replace("d-block", "d-none");
}

function clear2() {
  emailinput.value = "";
  passwordinput.value = "";
}
