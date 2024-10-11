const loginPageContainer = document.querySelector(".login");

// * Render login
function renderLogin() {
  loginPageContainer.innerHTML = `
     <div class="wrapper mb-5 d-flex flex-column align-items-center gap-3">
        <div class="login-headings d-flex gap-3">
          <h3 id="login">Login</h3>
          <h3 id="register" class="inactive">Register</h3>
        </div>
        <p>If you have an account, sign in with your username or email address.</p>
        <div class="inputs d-flex flex-column gap-3">
          <div class="input1">
            <label for="username" class="form-label">Username or email address *</label>
            <input type="text" id="username" class="form-control"/>
            <div class="error-message" id="login-username-error" style="color: red; display: none;"></div>
          </div>
          <div class="input1">
            <label for="password" class="form-label">Password *</label>
            <input type="password" id="password" class="form-control" />
            <div class="error-message" id="login-password-error" style="color: red; display: none;"></div>
          </div>
        </div>
        <div class="checks d-flex justify-content-between">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">Remember me</label>
          </div>
          <a href="#">Lost your password?</a>
        </div>
        <button class="btn btn-primary login-btn" id="login-btn">Log in</button>
      </div>
  `;

  document.getElementById("register").addEventListener("click", renderRegister);
  document.getElementById("login-btn").addEventListener("click", validateLogin);
}
// * Render register
function renderRegister() {
  loginPageContainer.innerHTML = `
    <div class="wrapper register mb-5 d-flex flex-column align-items-center gap-3">
      <div class="login-headings d-flex gap-3">
        <h3 id="login" class="inactive">Login</h3>
        <h3 id="register" class="active">Register</h3>
      </div>
      <p>There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more.</p>
      <div class="inputs d-flex flex-column gap-3">
        <div class="input1">
          <label for="register-username" class="form-label">Username *</label>
          <input type="text" id="register-username" class="form-control" />
          <div class="error-message" id="register-username-error" style="color: red; display: none;"></div>
        </div>
        <div class="input2">
          <label for="register-email" class="form-label">Email address *</label>
          <input type="email" id="register-email" class="form-control" />
          <div class="error-message" id="register-email-error" style="color: red; display: none;"></div>
        </div>
        <div class="input3">
          <label for="register-password" class="form-label">Password *</label>
          <input type="password" id="register-password" class="form-control" />
          <div class="error-message" id="register-password-error" style="color: red; display: none;"></div>
        </div>
      </div>
      <div class="checks d-flex flex-column">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">I am a customer</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">I am a vendor</label>
        </div>
      </div>
      <p style="text-align: left" class="mt-3">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" class="link">privacy policy.</a></p>
      <button class="btn btn-primary register-btn" id="register-btn">Register</button>
    </div>
  `;

  document.getElementById("login").addEventListener("click", renderLogin);
  document
    .getElementById("register-btn")
    .addEventListener("click", validateRegister);
}

// * Buyog'ni hammasi validation ga tegishli hay :)
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  let isValid = true;
  clearErrors(["login-username-error", "login-password-error"]);

  if (!username) {
    showError("login-username-error", "Username or email address is required.");
    isValid = false;
  }

  if (!password) {
    showError("login-password-error", "Password is required.");
    isValid = false;
  }

}

function validateRegister() {
  const username = document.getElementById("register-username").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();
  let isValid = true;
  clearErrors([
    "register-username-error",
    "register-email-error",
    "register-password-error",
  ]);


  if (!username) {
    showError("register-username-error", "Username is required.");
    isValid = false;
  }

  if (!email) {
    showError("register-email-error", "Email address is required.");
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    showError("register-email-error", "Email address is invalid.");
    isValid = false;
  }

  if (!password) {
    showError("register-password-error", "Password is required.");
    isValid = false;
  }

}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}

function clearErrors(errorIds) {
  errorIds.forEach((id) => {
    const errorElement = document.getElementById(id);
    errorElement.innerText = "";
    errorElement.style.display = "none";
  });
}

// * Boshida nimadir ko'rinishi kerakku. Shunga shu function chaqirib qo'yildi
renderLogin();
