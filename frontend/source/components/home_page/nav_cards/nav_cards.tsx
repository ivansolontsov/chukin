"use client";

import Image from "next/image";
import Link from "next/link";
import s from "./nav_cards.module.scss";
import { useParams } from "next/navigation";

export default function Nav_cards() {
  return (
    <ul className={s.nav_cards_container}>
      <li className={s.nav_item}>
        <div className={s.nav_item_text}>
          <span>Передпокій</span>
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
          <span>Кухні</span>
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
          <span>Шафи</span>
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
