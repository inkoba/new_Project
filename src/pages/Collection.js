import "../styles/scss/collection.scss";

const Collection = () => {

  const view = `
  <div>
    <h1>Collection</h1>
  </div>

  <div class="mainly">

        <div class="button-menu">
            <button class="tablink" onclick="collectionBtn('КЛАССИЧЕСКАЯ КОЛЛЕКЦИЯ', this, '#e00e48')"
                id="defaultOpen">КЛАССИЧЕСКАЯ КОЛЛЕКЦИЯ</button>
            <button class="tablink" onclick="collectionBtn('BODY ART INNOVATION', this, '#e00e48')">BODY ART
                INNOVATION</button>
            <button class="tablink" onclick="collectionBtn('МОДНАЯ КОЛЛЕКЦИЯ', this, '#e00e48')">МОДНАЯ КОЛЛЕКЦИЯ</button>
            <button class="tablink" onclick="collectionBtn('ACCENT', this, '#e00e48')">ACCENT</button>
            <button class="tablink" onclick="collectionBtn('КУПАЛЬНИКИ', this, '#e00e48')">КУПАЛЬНИКИ</button>
            <button class="tablink" onclick="collectionBtn('ТРИКОТАЖНАЯ КОЛЛЕКЦИЯ', this, '#e00e48')">ТРИКОТАЖНАЯ
                КОЛЛЕКЦИЯ</button>
        </div>

        <div class="body-button-menu">
            <div id="КЛАССИЧЕСКАЯ КОЛЛЕКЦИЯ" class="tabcontent">
                <div class="button-menu-wrapper">
                    <div class="sidebar">
                        <a class="active" href="#">Бюстгалтеры</a>
                        <a href="#">Трусы</a>
                        <a href="#">Комплекты</a>
                        <a href="#">Аксессуары</a>
                        <div></div>
                    </div>

                    <div class="content">
                        <img src="./images/img_collection/big1-1.jpg" alt="Классическая коллекция"
                            title="Классическая коллекция: НЕПРЕДСКАЗУЕМАЯ">
                    </div>
                </div>
            </div>

            <div id="BODY ART INNOVATION" class="tabcontent">
                <div class="button-menu-wrapper">
                    <div class="sidebar">
                        <a class="active" href="#">Бюстгалтеры</a>
                        <a href="#">Трусы</a>
                        <a href="#">Комплекты</a>
                        <a href="#">Аксессуары</a>
                        <div></div>
                    </div>

                    <div class="content">
                        <img src="./images/img_collection/big2-2.jpg" alt="BODY ART INNOVATION"
                            title="Коллекция BODY ART INNOVATION">
                    </div>
                </div>
            </div>

            <div id="МОДНАЯ КОЛЛЕКЦИЯ" class="tabcontent">
                <div class="button-menu-wrapper">
                    <div class="sidebar">
                        <a class="active" href="#">Бюстгалтеры</a>
                        <a href="#">Трусы</a>
                        <a href="#">Комплекты</a>
                        <a href="#">Аксессуары</a>
                        <div></div>
                    </div>

                    <div class="content">
                        <img src="./images/img_collection/big3.jpg" alt="Модная коллекция:НЕПРЕДСКАЗУЕМАЯ"
                            title="Модная коллекция:НЕПРЕДСКАЗУЕМАЯ">
                    </div>
                </div>
            </div>

            <div id="ACCENT" class="tabcontent">
                <div class="button-menu-wrapper">
                    <div class="sidebar">
                        <a class="active" href="#">Бюстгалтеры</a>
                        <a href="#">Трусы</a>
                        <a href="#">Комплекты</a>
                        <a href="#">Аксессуары</a>
                        <div></div>
                    </div>

                    <div class="content">
                        <img src="./images/img_collection/big4-4.jpg" alt="Коллекция: ШАРМ" title="Коллекция: ШАРМ">
                    </div>
                </div>
            </div>

            <div id="КУПАЛЬНИКИ" class="tabcontent">
                <div class="button-menu-wrapper">
                    <div class="sidebar">
                        <a class="active" href="#">Бюстгалтеры</a>
                        <a href="#">Трусы</a>
                        <a href="#">Комплекты</a>
                        <a href="#">Аксессуары</a>
                        <div></div>
                    </div>

                    <div class="content">
                        <img src="./images/img_collection/big5.jpg" alt="Купальники" title="Купальники">
                    </div>
                </div>
            </div>

            <div id="ТРИКОТАЖНАЯ КОЛЛЕКЦИЯ" class="tabcontent">
                <div class="button-menu-wrapper">
                    <div class="sidebar">
                        <a class="active" href="#">Бюстгалтеры</a>
                        <a href="#">Трусы</a>
                        <a href="#">Комплекты</a>
                        <a href="#">Аксессуары</a>
                        <div></div>
                    </div>

                    <div class="content">
                        <img src="./images/img_collection/big6.jpg" alt="Трикотажная коллекция"
                            title="Трикотажная коллекция">
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
  return view;
};

export default Collection;