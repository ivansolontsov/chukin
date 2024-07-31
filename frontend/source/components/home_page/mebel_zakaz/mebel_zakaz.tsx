import Link from "next/link";
import Image from "next/image";
import s from "./mebel_zakaz.module.scss"
import React, { useState } from "react";
import { Popup } from "@/source/components/popup/popup";

export default function Mebel_zakaz() {
    const [PopupInfoIsOpen, setPopupInfoOpen] = useState(false);

    return (
        <main>
            <Popup
                isOpen={PopupInfoIsOpen}
                onClose={() => setPopupInfoOpen(false)}
            />

            <div className={s.mebel_zakaz_container}>
                <h2 className={s.mebel_zakaz_title}>МЕБЛІ ПІД ЗАМОВЛЕННЯ CHUKIN•M</h2>
                <span className={s.mebel_zakaz_text1}>ЯКІСТЬ ТА НАДІЙНІСТЬ</span>
                <span className={s.mebel_zakaz_text2}>Дизайнерські меблі на кухню, у передпокій, вітальню та спальню. Підкресліть індивідуальність інтер’єру за допомогою меблів на замовлення від виробника Chukin•m</span>
                <div className={s.mebel_zakaz_buttons_container}>
                    <Link className={s.link_button} href="./pages/portfolio"><div className={s.button_container_zakaz}><button className={s.default_button}>Портфоліо<Image
                        className={s.buttom_img}
                        src="/portfolio.svg"
                        alt=""
                        width={20}
                        height={20}
                    /> </button></div></Link>

                    <div className={s.button_container_zakaz}><button className={s.mebel_default_button} onClick={() => setPopupInfoOpen(true)}>Зателефонувати<Image
                        className={s.buttom_img}
                        src="/phone.svg"
                        alt=""
                        width={20}
                        height={20}
                    /> </button></div>
                </div>

            </div>
        </main>

    )

}