import "../styles/scss/main.scss";

const LogIn = () => {
  const view = `
    <div class="login-box">
       <div class="login-head">
          <h1>Login Clone Jira.</h1>
       </div>
       <section class="login-box-form">
         <div class="login-title">
            Sign in to your account
         </div>
         <form id="login">
           <div>
            <div class="wrap-input">
              <input type="email" name="email" id="userName" placeholder="enter your email" class="email-input">
            </div>
            <div class="wrap-input">
              <input type="text" name="password" id="userPw" placeholder="password" class="password-input" autocomplete="off">
            </div>
           </div> 
            <div class="wrap-input-btn">
              <button type="submit">Login</button>
            </div>
           
         </form>

         <div class="another-links">
            <a href="/#/signup">Account registration</a>
         </div>
       </section>
      
   </div>
    </div>

   
  `;
  return view;
};

export default LogIn;