import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./header.module.scss"

export default function header() {
  return (
    <header>
      <div className={s.header_grid}>
      <div className={s.header_left_container}>
      <div className={s.container_main_logo}>
        <Image
          className={s.main_logo}
          src="/site_black.svg"
          alt=""
          width={160}
          height={32}
        />
      </div>

      <div className={s.container_social_href_facebook}>
        <a href="https://chukin-m.com/">
          <Image
            className={s.social_href}
            src="/facebook.svg"
            alt=""
            width={32}
            height={32}
          />
        </a>
      </div>

      <div className={s.container_social_href_insta}>
        <a href="https://chukin-m.com/">
          <Image
            className={s.social_href}
            src="/instagram.svg"
            alt=""
            width={32}
            height={32}
          />
        </a>
      </div>
      </div>
      <div className={s.header_right_container}>
        <ul className={s.menu_header}>
        <Link className={s.link_button} href="/"><li className={s.menu_header_item}>Головна</li></Link>
          <Link className={s.link_button} href="/articles"><li className={s.menu_header_item}>Статті</li></Link>
          <li className={s.menu_header_item}>Портфоліо</li>
        </ul>
      </div>
      </div>
    </header>
  );
}
