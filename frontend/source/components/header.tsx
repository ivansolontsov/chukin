import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function header() {
  return (
    <header>
      <div className="header_grid">
      <div className="header_left_container">
      <div className="container_main_logo">
        <Image
          className="main_logo"
          src="/site_black.svg"
          alt=""
          width={160}
          height={32}
        />
      </div>

      <div className="container_social_href_facebook">
        <a href="https://chukin-m.com/">
          <Image
            className="social_href"
            src="/facebook.svg"
            alt=""
            width={32}
            height={32}
          />
        </a>
      </div>

      <div className="container_social_href_insta">
        <a href="https://chukin-m.com/">
          <Image
            className="social_href"
            src="/instagram.svg"
            alt=""
            width={32}
            height={32}
          />
        </a>
      </div>
      </div>
      <div className="header_right_container">
        <ul className="menu_header">
        <Link className="link_button" href="/"><li className="menu_header_item">Головна</li></Link>
          <Link className="link_button" href="/articles"><li className="menu_header_item">Статті</li></Link>
          <li className="menu_header_item">Портфоліо</li>
        </ul>
      </div>
      </div>
    </header>
  );
}
