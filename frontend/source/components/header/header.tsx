import React from "react";
import Image from "next/image";
import s from "./header.module.scss";
import { IconFacebook } from "@/source/components/icons/ExampleIcon";
import { IconInsta } from "@/source/components/icons/InstaIcon";
import Link from "next/link";
import { IDictionaries } from "@/dictionaries";

interface HeaderTextProps {
  dictionary: IDictionaries;
}

export default function header({ dictionary }: HeaderTextProps) {
  return (
    <header>
      <div className={s.header_grid}>
        <div className={s.header_left_container}>
          <Link className={s.link_button} href="/">
            <div className={s.container_main_logo}>
              <Image
                className={s.main_logo}
                src="/site_black.svg"
                alt=""
                width={160}
                height={32}
              />
            </div>
          </Link>
          <div className={s.container_social_href_facebook}>
            <a
              href="https://www.facebook.com/profile.php?id=61556394524366/"
              target="_blank"
            >
              <IconFacebook className={s.social_icon} />
            </a>
          </div>
          <div className={s.container_social_href_insta}>
            <a href="https://www.instagram.com/chukin.meb/" target="_blank">
              <IconInsta className={s.social_icon} />
            </a>
          </div>
        </div>
        <div className={s.header_right_container}>
          <ul className={s.menu_header}>
            <Link className={s.link_button} href="/">
              <li className={s.menu_header_item}>{dictionary.HeaderText.text1}</li>
            </Link>
            <Link className={s.link_button} href="/ru/articles">
              <li className={s.menu_header_item}>{dictionary.HeaderText.text2}</li>
            </Link>
            <li className={s.menu_header_item}>{dictionary.HeaderText.text3}</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
