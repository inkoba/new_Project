import "../styles/scss/main.scss";

const SignUp = () => {
  const view = `
  <div class="login-box">
  <div class="login-head">
     <h1>Регистрация</h1>
  </div>
  <section class="login-box-form">
    <div class="login-title">
       Регистрация вашего аккаунта
    </div>
    <form id="signin">
      <div>
       <div class="wrap-input">
         <input type="email" name="email" placeholder="enter your email" id="name1" class="email-input">
       </div>
       <div class="wrap-input">
         <input type="text" name="password" placeholder="password" class="password-input" id="pw" autocomplete="off">
       </div>
      </div> 
       <div class="wrap-input-btn">
         <button type="submit">Login</button>
       </div>
      
    </form>

    <div class="another-links">
       <a href="/#/login">Account login</a>
    </div>
  </section>
</div>
</div>
  `;
  return view;
};

export default SignUp;