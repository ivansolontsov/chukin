import Link from "next/link";
import { Swiper_back } from "@/source/components/swiper_back";
import Image from "next/image";
import Script from 'next/script'



export default function Home() {

  return (
    <main>
      {/* Подвязка тайпера текста */}
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
      <Script src="/typer/script.js" />
      <div id="typed-strings">
        <span>- Це якисть</span>
        <span>- Це дизайн</span>
      </div>
      <div className="text-typing">
        <span>"Chukin🞄M"&nbsp;</span>
        <span id="typed"></span>
      </div>
      <div className="call_button_container"><div className="button_container_zakaz"><button className="default_button">Замовити дзвінок<Image
          className="buttom_img"
          src="/phone.svg"
          alt=""
          width={20}
          height={20}
        /> </button></div></div>
      {/* Свайпер */}
      <div className="swiper_container">
        <Swiper_back />
      </div>
      {/* 3 карточки навигации */}
      <ul className="nav_cards_container">
        <li className="nav_item">
          <div className="nav_item_text">
            <span>Передпокій</span>
          </div>
          <div className="nav_item_image">
            <Link href="./pages/portfolio">
              <Image
                className="nav_item_image_zoom"
                src="/nav_cards/cupboard.jpg"
                alt=""
                width={1024}
                height={768}
              />
            </Link>
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_item_text">
            <span>Кухні</span>
          </div>
          <div className="nav_item_image">
            <Link href="./pages/portfolio">
              <Image
                className="nav_item_image_zoom"
                src="/nav_cards/kitchen.jpg"
                alt=""
                width={1024}
                height={768}
              />
            </Link>
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_item_text">
            <span>Шафи</span>
          </div>
          <div className="nav_item_image">
            <Link href="./pages/portfolio">
              <Image
                className="nav_item_image_zoom"
                src="/nav_cards/shafi.jpg"
                alt=""
                width={1024}
                height={768}
              />
            </Link>
          </div>
        </li>
      </ul>
      {/* Шаги заказа */}
      <div className="aboutorder_conatainer_main">
        <div className="aboutorder_container_item_v1">
          <p className="aboutorder_container_text">Крок 1.  Надаємо якісну консультацію згідно ваших побажань, для того що ви розуміли з чим ви маєте справу та що вам обрати. (треба більше слів)
          </p>
          <div className="aboutorder_img_container">
            <Image
              className="aboutorder_img"
              src="/steps/step1.jpg"
              alt=""
              width={900}
              height={600}
            /></div>
        </div>
        <div className="aboutorder_container_item_v2">
          <div className="aboutorder_img_container">
            <Image
              className="aboutorder_img"
              src="/steps/step1.jpg"
              alt=""
              width={900}
              height={600}
            /></div>
          <p className="aboutorder_container_text">Крок 1.  Надаємо якісну консультацію згідно ваших побажань, для того що ви розуміли з чим ви маєте справу та що вам обрати. (треба більше слів)
          </p>

        </div>
      </div>
      {/* Статьи, важная информация */}
      <div className="a_imformation_container_main">
        <h2 className="a_imformation_title">ВАЖЛИВА ІНФОРМАЦІЯ</h2>
        <div className="a_information_items_container">
          <Link className="link_button" href="./pages/portfolio"><div className="a_information_item">
            <div className="a_information_ing_container">
              <Image
                className="a_information_img"
                src="/articles/news3.png"
                alt=""
                width={900}
                height={600}
              />
            </div>
            <span className="a_information_item_text">З яких матеріалів виготовляються меблі RL-Mebel</span>
          </div></Link>
          <Link className="link_button" href="./pages/portfolio"><div className="a_information_item">
            <div className="a_information_ing_container">
              <Image
                className="a_information_img"
                src="/articles/news2.jpg"
                alt=""
                width={900}
                height={600}
              />
            </div>
            <span className="a_information_item_text">7 помилок при купівлі кухні</span>
          </div></Link>
          <Link className="link_button" href="./pages/portfolio"><div className="a_information_item">
            <div className="a_information_ing_container">
              <Image
                className="a_information_img"
                src="/articles/news1.jpg"
                alt=""
                width={900}
                height={600}
              />
            </div>
            <span className="a_information_item_text">Навіщо потрібен замір перед замовлення меблів?</span>
          </div></Link>
        </div>
        <p className="a_information_item_text_bottom">Ми створюємо унікальний стиль за допомогою якісних меблів. Повний цикл виготовлення меблів в Києві та Закарпатській області під замовлення і в строк!</p>
        <Link className="link_button" href="./pages/portfolio"><div className="button_container"><button className="default_button">Більше статей<Image
          className="buttom_img"
          src="/article.svg"
          alt=""
          width={20}
          height={20}
        /> </button></div></Link>
      </div>
      {/* Мебель под заказ */}
      <div className="mebel_zakaz_container">
      <h2 className="mebel_zakaz_title">МЕБЛІ ПІД ЗАМОВЛЕННЯ CHUKIN•M</h2>
      <span className="mebel_zakaz_text1">ЯКІСТЬ ТА НАДІЙНІСТЬ</span>
      <span className="mebel_zakaz_text2">Дизайнерські меблі на кухню, у передпокій, вітальню та спальню. Підкресліть індивідуальність інтер’єру за допомогою меблів на замовлення від виробника Chukin•m</span>
      <div className="mebel_zakaz_buttons_container">
      <Link className="link_button" href="./pages/portfolio"><div className="button_container_zakaz"><button className="default_button">Портфоліо<Image
          className="buttom_img"
          src="/portfolio.svg"
          alt=""
          width={20}
          height={20}
        /> </button></div></Link>
        <Link className="link_button" href="./pages/portfolio"><div className="button_container_zakaz"><button className="mebel_default_button">Зателефонувати<Image
          className="buttom_img"
          src="/phone.svg"
          alt=""
          width={20}
          height={20}
        /> </button></div></Link>
      </div>
         
      </div>
      {/* Наши достоинства */}
      <div className="perevagi_container">
      <h2 className="mebel_zakaz_title">НАШІ ПЕРЕВАГИ</h2>
      <span className="mebel_zakaz_text1">НАШ КЛІЄНТ ЗАВЖДИ ЗАДОВОЛЕНИЙ!</span>
      <div className="perevagi_items">
        <div className="perevagi_item">
          <div className="perevagi_head">
           <span className="perevagi_tile">ПУНКТУАЛЬНІСТЬ</span>
           <Image
          className="perevagi_img"
          src="/clock.svg"
          alt=""
          width={50}
          height={50}
        />
          </div>
          <p className="perevagi_text">Замовляючи меблі в Chukin•m, ви можете розраховувати на виконання вашого замовлення точно в обумовлений термін.</p>
        </div>
        <div className="perevagi_item">
          <div className="perevagi_head">
           <span className="perevagi_tile">ЯКІСТЬ</span>
           <Image
          className="perevagi_img"
          src="/dimond.svg"
          alt=""
          width={50}
          height={50}
        />
          </div>
          <p className="perevagi_text">Ми створюємо якісні та надійні меблі, які прослужать вам не один рік. Крім того, вони будуть красивими і чудово доповнять будь-який інтер'єр.</p>
        </div>
        <div className="perevagi_item">
          <div className="perevagi_head">
           <span className="perevagi_tile">НАДІЙНІСТЬ</span>
           <Image
          className="perevagi_img"
          src="/like.svg"
          alt=""
          width={50}
          height={50}
        />
          </div>
          <p className="perevagi_text">Надійність наших меблів підтверджена багаторічним досвідом, професійним підходом і вищим рівнем виконання.</p>
        </div>

      
      </div>



      </div>


    </main>



  );
}