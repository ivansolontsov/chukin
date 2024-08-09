import React from 'react'
import s from "./footer.module.scss"
import Link from "next/link";
import { IconMainLogo } from "@/source/components/icons/main_logo"
import { IconPhone } from "@/source/components/icons/phone_icon"
import { IconViber } from "@/source/components/icons/viber"
import { IconTelegram } from "@/source/components/icons/telegram"
import { IconWhatsapp } from "@/source/components/icons/whatsapp"
import { IconGmail } from "@/source/components/icons/gmail"

import { IDictionaries } from "@/dictionaries";

interface FooterTextProps {
  dictionary: IDictionaries;
}

export default function footer({ dictionary }: FooterTextProps) {
  return (
    <footer>
      <div className={s.footer_container}>
        <div className={s.footer_left_container}>
          <IconMainLogo />
        </div>
        <div className={s.footer_center_container}>
          <Link className={s.link_button} href="./pages/portfolio"><div className={s.button_container_zakaz}><button className={s.default_button}>{dictionary.FooterText.text1}</button></div></Link>
        </div>
        <div className={s.footer_right_container}>
          <div className={s.footer_right_container_top}>
            <div className={s.phone_container}>
            <Link className={s.social_link} href="/"><IconPhone className={s.social_icon}/><span className={s.social_text}>+380967741735</span></Link>
            </div>
            <div className={s.phone_container}>
            <Link className={s.social_link} href="/"><IconPhone className={s.social_icon}/><span className={s.social_text}>+380993784424</span></Link>
            </div>
          </div>
          <div className={s.footer_right_container_bottom}>
          <div className={s.social_container}><Link className={s.social_link} href="/"><IconViber className={s.social_icon}/><span className={s.social_text}>Viber</span></Link></div>
          <div className={s.social_container}><Link className={s.social_link} href="/"><IconTelegram className={s.social_icon}/><span className={s.social_text}>Telegram</span></Link></div>
          <div className={s.social_container}><Link className={s.social_link} href="/"><IconWhatsapp className={s.social_icon}/><span className={s.social_text}>Whatsapp</span></Link></div>
          <div className={s.social_container}><Link className={s.social_link} href="/"><IconGmail className={s.social_icon}/><span className={s.social_text}>E-mail</span></Link></div>
          </div>
        </div>
      </div>

    </footer>
  )
}
