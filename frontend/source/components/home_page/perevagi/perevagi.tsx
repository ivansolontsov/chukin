"use client";

import Image from "next/image";
import s from "./perevagi.module.scss";

export default function Home() {
  return (
    <div className={s.perevagi_container}>
      <h2 className={s.mebel_zakaz_title}>НАШІ ПЕРЕВАГИ</h2>
      <span className={s.mebel_zakaz_text1}>
        НАШ КЛІЄНТ ЗАВЖДИ ЗАДОВОЛЕНИЙ!
      </span>
      <div className={s.perevagi_items}>
        <div className={s.perevagi_item}>
          <div className={s.perevagi_head}>
            <span className={s.perevagi_tile}>ПУНКТУАЛЬНІСТЬ</span>
            <Image
              className={s.perevagi_img}
              src="/clock.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <p className={s.perevagi_text}>
            Замовляючи меблі в Chukin•m, ви можете розраховувати на виконання
            вашого замовлення точно в обумовлений термін.
          </p>
        </div>
        <div className={s.perevagi_item}>
          <div className={s.perevagi_head}>
            <span className={s.perevagi_tile}>ЯКІСТЬ</span>
            <Image
              className={s.perevagi_img}
              src="/dimond.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <p className={s.perevagi_text}>
            Ми створюємо якісні та надійні меблі, які прослужать вам не один
            рік. Крім того, вони будуть красивими і чудово доповнять будь-який
            інтер'єр.
          </p>
        </div>
        <div className={s.perevagi_item}>
          <div className={s.perevagi_head}>
            <span className={s.perevagi_tile}>НАДІЙНІСТЬ</span>
            <Image
              className={s.perevagi_img}
              src="/like.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <p className={s.perevagi_text}>
            Надійність наших меблів підтверджена багаторічним досвідом,
            професійним підходом і вищим рівнем виконання.
          </p>
        </div>
      </div>
    </div>
  );
}
