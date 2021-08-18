import "../styles/scss/main.scss";


const Contacts = () => {
  const view = `
  <div class="mainly">
        <div class="item-name-contact">
        <strong>Контакты</strong>
          <p> Здесь вы можете найти нас!<br>
            Адрес: г. Борисов, рынок "Стадион", павильон №_<br>
            <span class="number icon-call"><a href="tel: +375 29 55 92 071">Тел: +375 29 55 92 071</a></span>
          </p>
          
          <div class="star">
            <div class="inline"></div>
            <div><img src="./images/favicon.ico"></div>
            <div class="inline"></div>
          </div>

          <p> График работы магазина:
          <ul>
            <li>Понедельник	выходной</li>
            <li>Вторник	с 9:00 до 15:00</li>
            <li>Среда	с 9:00 до 15:00</li>
            <li>Четверг	с 9:00 до 15:00</li>
            <li>Пятница	с 9:00 до 15:00</li>
            <li>Суббота	с 09:00 до 15:00</li>
            <li>Воскресенье	с 09:00 до 15:00</li>
            <li> Заказы через сайт принимаются круглосуточно!</li>
          </ul>
          </p>
          <p>  Реквизиты:
            <ul> 
              <li>ИП Иванов Иван Иванович</li>
            
              <li>ОГРНИП: 123456789012345</li>
            
              <li>ИНН: 123456789012</li>
            
              <li>КПП: 123456789</li>
            </ul>
          </p>
        </div>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.3850222301394!2d28.488612560242164!3d54.22166470829724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDEzJzE3LjYiTiAyOMKwMjknMjMuNSJF!5e1!3m2!1sru!2sby!4v1619462559632!5m2!1sru!2sby"
            width=100% height="450" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
        
    </div>
  `;

  return view;
}

export default Contacts;