"use client";

import Image from "next/image";
import Link from "next/link";
import s from "./nav_cards.module.scss";
import { useParams } from "next/navigation";

import { IDictionaries } from "@/dictionaries";

interface NavcTextProps {
  dictionary: IDictionaries;
}

export default function Nav_cards({ dictionary }: NavcTextProps) {
  return (
    <ul className={s.nav_cards_container}>
      <li className={s.nav_item}>
        <div className={s.nav_item_text}>
          <span>{dictionary.NavcText.text1}</span>
        </div>
        <div className={s.nav_item_image}>
          <Link href="./pages/portfolio">
            <Image
              className={s.nav_item_image_zoom}
              src="/nav_cards/cupboard.jpg"
              alt=""
              width={1024}
              height={768}
            />
          </Link>
        </div>
      </li>
      <li className={s.nav_item}>
        <div className={s.nav_item_text}>
          <span>{dictionary.NavcText.text2}</span>
        </div>
        <div className={s.nav_item_image}>
          <Link href="./pages/portfolio">
            <Image
              className={s.nav_item_image_zoom}
              src="/nav_cards/kitchen.jpg"
              alt=""
              width={1024}
              height={768}
            />
          </Link>
        </div>
      </li>
      <li className={s.nav_item}>
        <div className={s.nav_item_text}>
          <span>{dictionary.NavcText.text3}</span>
        </div>
        <div className={s.nav_item_image}>
          <Link href="./pages/portfolio">
            <Image
              className={s.nav_item_image_zoom}
              src="/nav_cards/shafi.jpg"
              alt=""
              width={1024}
              height={768}
            />
          </Link>
        </div>
      </li>
    </ul>
  );
}
