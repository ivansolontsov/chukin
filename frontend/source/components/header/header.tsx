import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./header.module.scss"

export default function header() {
  return (
    <header>
      <div className={s.header_grid}>
        <div className={s.header_left_container}>
          <Link className={s.link_button} href="/"><div className={s.container_main_logo}>
            <Image
              className={s.main_logo}
              src="/site_black.svg"
              alt=""
              width={160}
              height={32}
            />
          </div></Link>
          <div className={s.container_social_href_facebook}>
            <a href="https://www.facebook.com/rlmebel/" target="_blank">
              <svg className={s.social_icon} fill="currentColor" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" /></svg>
            </a>
          </div>
          <div className={s.container_social_href_insta}>
            <a href="https://www.instagram.com/rl_mebel/" target="_blank">
              <svg className={s.social_icon} width="32px" height="32px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" fill="none" width="20" height="20" />
                <g><path d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10 7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3-.7.3-1.3.9-1.5 1.6-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5 1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3-.8-.9-1.3-2.1-1.3-3.4V10 6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3.8.9 1.3 2.1 1.3 3.4V10z" /></g>
              </svg>
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
