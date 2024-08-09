"use client";

import Image from "next/image";
import s from "./about_order.module.scss";


import { IDictionaries } from "@/dictionaries";

interface AborderTextProps {
  dictionary: IDictionaries;
}

export default function About_order({ dictionary }: AborderTextProps) {
  return (
    <div className={s.aboutorder_conatainer_main}>
      <h2 className={s.title}>{dictionary.AborderText.title}</h2>
      <div className={s.aboutorder_container_item_v1}>
        <div className={s.textblock_container}>
          <div className={s.text_title_container}>
            <span className={s.text_title}>
            {dictionary.AborderText.step1}
            </span>
          </div>
          <p className={s.aboutorder_container_text}>
          {dictionary.AborderText.step1text}
          </p>
        </div>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step1.jpg"
            alt=""
            width={600}
            height={300}
          />
        </div>
      </div>
      <div className={s.aboutorder_container_item_v2}>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step2.jpg"
            alt=""
            width={600}
            height={300}
          />
        </div>
        <div className={s.textblock_container}>
          <div className={s.text_title_container}>
            <span className={s.text_title}>
            {dictionary.AborderText.step2}
            </span>
          </div>
          <p className={s.aboutorder_container_text}>
            {" "}
            {dictionary.AborderText.step2text}
          </p>
        </div>
      </div>
      <div className={s.aboutorder_container_item_v1}>
        <div className={s.textblock_container}>
          <div className={s.text_title_container}>
            <span className={s.text_title}>
            {dictionary.AborderText.step3}
            </span>
          </div>
          <p className={s.aboutorder_container_text}>
          {dictionary.AborderText.step3text}
          </p>
        </div>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step3.jpg"
            alt=""
            width={600}
            height={300}
          />
        </div>
      </div>
      <div className={s.aboutorder_container_item_v2}>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step4.jpg"
            alt=""
            width={600}
            height={300}
          />
        </div>
        <div className={s.textblock_container}>
          <div className={s.text_title_container}>
            <span className={s.text_title}>
            {dictionary.AborderText.step4}
            </span>
          </div>
          <p className={s.aboutorder_container_text}>
            {" "}
            {dictionary.AborderText.step4text}
          </p>
        </div>
      </div>
      <div className={s.aboutorder_container_item_v1}>
        <div className={s.textblock_container}>
          <div className={s.text_title_container}>
            <span className={s.text_title}>
            {dictionary.AborderText.step5}
            </span>
          </div>
          <p className={s.aboutorder_container_text}>
          {dictionary.AborderText.step5text}
          </p>
        </div>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step5.jpg"
            alt=""
            width={600}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
