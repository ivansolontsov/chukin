"use client";

import Link from "next/link";
import Image from "next/image";
import s from "./mebel_zakaz.module.scss";
import React, { useState } from "react";

import { IDictionaries } from "@/dictionaries";

interface ZakazTextProps {
  dictionary: IDictionaries;
}

export default function Mebel_zakaz({ dictionary }: ZakazTextProps) {
  const [PopupInfoIsOpen, setPopupInfoOpen] = useState(false);

  return (
    <main>
      <div className={s.mebel_zakaz_container}>
        <h2 className={s.mebel_zakaz_title}>{dictionary.ZakazText.title}</h2>
        <span className={s.mebel_zakaz_text1}>{dictionary.ZakazText.text1}</span>
        <span className={s.mebel_zakaz_text2}>
          {dictionary.ZakazText.text2}
        </span>
        <div className={s.mebel_zakaz_buttons_container}>
          <Link className={s.link_button} href="./pages/portfolio">
            <div className={s.button_container_zakaz}>
              <button className={s.default_button}>
              {dictionary.ZakazText.button1}
                <Image
                  className={s.buttom_img}
                  src="/portfolio.svg"
                  alt=""
                  width={20}
                  height={20}
                />{" "}
              </button>
            </div>
          </Link>

          <div className={s.button_container_zakaz}>
            <button
              className={s.mebel_default_button}
              onClick={() => setPopupInfoOpen(true)}
            >
              {dictionary.ZakazText.button2}
              <Image
                className={s.buttom_img}
                src="/phone.svg"
                alt=""
                width={20}
                height={20}
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
