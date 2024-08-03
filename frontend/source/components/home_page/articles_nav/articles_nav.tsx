"use client";

import Link from "next/link";
import Image from "next/image";
import s from "./articles_nav.module.scss";

export default function Aricles_nav() {
  return (
    <div className={s.a_imformation_container_main}>
      <h2 className={s.a_imformation_title}>ВАЖЛИВА ІНФОРМАЦІЯ</h2>
      <div className={s.a_information_items_container}>
        <Link className={s.link_button} href="./pages/portfolio">
          <div className={s.a_information_item}>
            <div className={s.a_information_ing_container}>
              <Image
                className={s.a_information_img}
                src="/articles/news3.png"
                alt=""
                width={900}
                height={600}
              />
            </div>
            <span className={s.a_information_item_text}>
              З яких матеріалів виготовляються меблі RL-Mebel
            </span>
          </div>
        </Link>
        <Link className={s.link_button} href="./pages/portfolio">
          <div className={s.a_information_item}>
            <div className={s.a_information_ing_container}>
              <Image
                className={s.a_information_img}
                src="/articles/news2.jpg"
                alt=""
                width={900}
                height={600}
              />
            </div>
            <span className={s.a_information_item_text}>
              7 помилок при купівлі кухні
            </span>
          </div>
        </Link>
        <Link className={s.link_button} href="./pages/portfolio">
          <div className={s.a_information_item}>
            <div className={s.a_information_ing_container}>
              <Image
                className={s.a_information_img}
                src="/articles/news1.jpg"
                alt=""
                width={900}
                height={600}
              />
            </div>
            <span className={s.a_information_item_text}>
              Навіщо потрібен замір перед замовлення меблів?
            </span>
          </div>
        </Link>
      </div>
      <p className={s.a_information_item_text_bottom}>
        Ми створюємо унікальний стиль за допомогою якісних меблів. Повний цикл
        виготовлення меблів в Києві та Закарпатській області під замовлення і в
        строк!
      </p>
      <Link className={s.link_button} href="./pages/portfolio">
        <div className={s.button_container}>
          <button className={s.default_button}>
            Більше статей
            <Image
              className={s.buttom_img}
              src="/article.svg"
              alt=""
              width={20}
              height={20}
            />{" "}
          </button>
        </div>
      </Link>
    </div>
  );
}
