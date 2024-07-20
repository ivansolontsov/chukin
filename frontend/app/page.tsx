import Link from "next/link";
import {Swiper_back} from "@/source/components/swiper_back";
import Image from "next/image";
import Script from 'next/script'



export default function Home() {

  return (

    <main>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
      <Script src="/typer/script.js" />
      <div id="typed-strings">
        <span>- Це якисть</span>
        <span>- Це дизайн</span>
      </div>
      <div className="text-typing">
        <span>"Chukin🞄M"&nbsp;</span>
        <span id="typed"></span>
      </div>
      <div className="swiper_container">
        <Swiper_back />
      </div>
      <ul className="nav_cards_container">
        <li className="nav_item">
          <div className="nav_item_text">
            <span>Шафи</span>
          </div>
          <div className="nav_item_image">
            <Link href="./pages/portfolio">
              <Image
                className="nav_item_image_zoom"
                src="/nav_cards/bedroom.jpg"
                alt=""
                width={327}
                height={350}
              />
            </Link>
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_item_text">
            <span>Шафи</span>
          </div>
          <div className="nav_item_image">
            <Link href="./pages/portfolio">
              <Image
                className="nav_item_image_zoom"
                src="/nav_cards/bedroom.jpg"
                alt=""
                width={327}
                height={350}
              />
            </Link>
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_item_text">
            <span>Шафи</span>
          </div>
          <div className="nav_item_image">
            <Link href="./pages/portfolio">
              <Image
                className="nav_item_image_zoom"
                src="/nav_cards/bedroom.jpg"
                alt=""
                width={327}
                height={350}
              />
            </Link>
          </div>
        </li>
      </ul>
      
    </main>



  );
}