"use client";

import Link from "next/link";
import Image from "next/image";
import s from "./articles_nav.module.scss";

import { IDictionaries } from "@/dictionaries";

interface AnavTextProps {
  dictionary: IDictionaries;
}

export default function Aricles_nav({ dictionary }: AnavTextProps) {
  return (
    <div className={s.a_imformation_container_main}>
      <h2 className={s.a_imformation_title}>{dictionary.AnavText.title}</h2>
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
            {dictionary.AnavText.card1}
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
            {dictionary.AnavText.card2}
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
            {dictionary.AnavText.card3}
            </span>
          </div>
        </Link>
      </div>
      <p className={s.a_information_item_text_bottom}>
      {dictionary.AnavText.bottom}
      </p>
      <Link className={s.link_button} href="./pages/portfolio">
        <div className={s.button_container}>
          <button className={s.default_button}>
          {dictionary.AnavText.button}
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
