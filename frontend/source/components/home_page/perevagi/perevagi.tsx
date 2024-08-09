"use client";

import Image from "next/image";
import s from "./perevagi.module.scss";

import { IDictionaries } from "@/dictionaries";

interface PerevagiTextProps {
  dictionary: IDictionaries;
}

export default function Home({ dictionary }: PerevagiTextProps) {
  return (
    <div className={s.perevagi_container}>
      <h2 className={s.mebel_zakaz_title}>{dictionary.PerevagiText.title}</h2>
      <span className={s.mebel_zakaz_text1}>
      {dictionary.PerevagiText.text}
      </span>
      <div className={s.perevagi_items}>
        <div className={s.perevagi_item}>
          <div className={s.perevagi_head}>
            <span className={s.perevagi_tile}>{dictionary.PerevagiText.text1title}</span>
            <Image
              className={s.perevagi_img}
              src="/clock.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <p className={s.perevagi_text}>
          {dictionary.PerevagiText.text1}
          </p>
        </div>
        <div className={s.perevagi_item}>
          <div className={s.perevagi_head}>
            <span className={s.perevagi_tile}>{dictionary.PerevagiText.text2title}</span>
            <Image
              className={s.perevagi_img}
              src="/dimond.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <p className={s.perevagi_text}>
          {dictionary.PerevagiText.text2}
          </p>
        </div>
        <div className={s.perevagi_item}>
          <div className={s.perevagi_head}>
            <span className={s.perevagi_tile}>{dictionary.PerevagiText.text3title}</span>
            <Image
              className={s.perevagi_img}
              src="/like.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <p className={s.perevagi_text}>
          {dictionary.PerevagiText.text3}
          </p>
        </div>
      </div>
    </div>
  );
}
