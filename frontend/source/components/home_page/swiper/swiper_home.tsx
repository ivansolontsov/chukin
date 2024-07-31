'use client'

import { Swiper_module } from "./swiper_module/swiper_module";
import { Popup } from "@/source/components/popup/popup";
import React, {useState} from "react";
import Image from "next/image";
import s from "./swiper_home.module.scss"

export default function Swiper_home() {
    const [PopupInfoIsOpen, setPopupInfoOpen] = useState(false);
  
    return (
        <main>
       <Popup
      isOpen={PopupInfoIsOpen}
      onClose={() => setPopupInfoOpen(false)}
       />
      <div className={s.call_button_container}><div className={s.button_container_zakaz}><button className={s.default_button} onClick={()=> setPopupInfoOpen(true)}>Замовити дзвінок<Image
          className={s.buttom_img}
          src="/phone.svg"
          alt=""
          width={20}
          height={20}
        /> </button></div></div>
      {/* Свайпер */}
      <div className={s.swiper_container}>
        <Swiper_module />
      </div>
      </main>
    )
}