import Link from "next/link";
import { Swiper_back } from "@/source/components/swiper_back";
import Image from "next/image";
import Script from 'next/script'



export default function Home() {

  return (

    <main>
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
      <div className="swiper_container">
        <Swiper_back />
      </div>
      <ul className="nav_cards_container">
        <li className="nav_item">
          <div className="nav_item_text">
            <span>Шафи</span>
          </div>
          <div className="nav_item_image">
            <Link href="./pages/portfolio">
              <Image
                className="nav_item_image_zoom"
                src="/nav_cards/bedroom.jpg"
                alt=""
                width={327}
                height={350}
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
                src="/nav_cards/bedroom.jpg"
                alt=""
                width={327}
                height={350}
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
                src="/nav_cards/bedroom.jpg"
                alt=""
                width={327}
                height={350}
              />
            </Link>
          </div>
        </li>
      </ul>
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
      <div className="a_imformation_container_main">
        <h2 className="a_imformation_title">ВАЖЛИВА ІНФОРМАЦІЯ</h2>
        <div className="a_information_items_container">
          <div className="a_information_item">
            <div className="a_information_ing_container">
            <Image
              className="a_information_img"
              src="/steps/step1.jpg"
              alt=""
              width={900}
              height={600}
              />
            </div>
            <span className="a_information_item_text">З ЯКИХ МАТЕРІАЛІВ ВИГОТОВЛЯЮТЬСЯ МЕБЛІ RL-MEBEL</span>
          </div>
          <div className="a_information_item">
            <div className="a_information_ing_container">
            <Image
              className="a_information_img"
              src="/steps/step1.jpg"
              alt=""
              width={900}
              height={600}
              />
            </div>
            <span className="a_information_item_text">З ЯКИХ МАТЕРІАЛІВ ВИГОТОВЛЯЮТЬСЯ МЕБЛІ RL-MEBEL</span>
          </div>
          <div className="a_information_item">
            <div className="a_information_ing_container">
            <Image
              className="a_information_img"
              src="/steps/step1.jpg"
              alt=""
              width={900}
              height={600}
              />
            </div>
            <span className="a_information_item_text">З ЯКИХ МАТЕРІАЛІВ ВИГОТОВЛЯЮТЬСЯ МЕБЛІ RL-MEBEL</span>
          </div>
        </div>
        <p className="a_information_item_text_bottom">Ми створюємо унікальний стиль за допомогою якісних меблів. Повний цикл виготовлення меблів в Києві та Закарпатській області під замовлення і в строк!</p>


      </div>
      
      

    </main>



  );
}