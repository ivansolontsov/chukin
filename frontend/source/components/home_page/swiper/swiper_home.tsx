"use client";

import { Swiper_module } from "./swiper_module/swiper_module";
import React, { useState } from "react";
import Image from "next/image";
import s from "./swiper_home.module.scss";

export default function Swiper_home() {
  return (
    <main>
      <div className={s.call_button_container}>
        <div className={s.button_container_zakaz}>
          <button className={s.default_button}>
            Замовити дзвінок
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
      {/* Свайпер */}
      <div className={s.swiper_container}>
        <Swiper_module />
      </div>
    </main>
  );
}
