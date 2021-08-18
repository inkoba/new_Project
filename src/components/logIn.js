//регистрация
const writeAccountData = () => {
  //event.preventdefault();
  const userEmail = document.querySelector("#name1");
  const userPassword = document.querySelector("#pw");

  localStorage.setItem("user-email", userEmail.value);
  localStorage.setItem("user-password", userPassword.value);

  //возможностьгенерирования ключа

  window.location.href = "http://localhost:8080/#";
  localStorage.setItem("session-key", generatePassword());


}

// подтягивание данных с локалстр
const checkLogin = (event) => {
  event.preventdefault();
  const emailStore = localStorage.getItem("user-email");
  const passwordStore = localStorage.getItem("user-password");

  const userEmail = document.querySelector('#userName');
  const userPassword = document.querySelector('#userPw');

  //если мы правильно залагинились то переходим на главную страницу
  if (userEmail.value === emailStore && userPassword.value === passwordStore) {
    /* alert('OK'); */
    window.location.href = "http://localhost:8080/#";
    localStorage.setItem("session-key", generatePassword());
  } else {
    alert('Not OK')
  }
}

const generatePassword = () => {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};


const redirect = () => {
  if (window.location.href != "http://localhost:8080/#/signup" && !localStorage.getItem('session-key')) {
    window.location.href = "http://localhost:8080/#/login1";
    return true;
  }
  return false;
};

export { redirect, writeAccountData, checkLogin };
