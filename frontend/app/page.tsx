'use client'
import Typer_text from "@/source/components/home_page/typer/typer";
import Swiper_home from "@/source/components/home_page/swiper/swiper_home";
import Nav_cards from "@/source/components/home_page/nav_cards/nav_cards";
import About_order from "@/source/components/home_page/about_order/about_order";
import Articles_nav from "@/source/components/home_page/articles_nav/articles_nav";
import Mebel_zakaz from "@/source/components/home_page/mebel_zakaz/mebel_zakaz";
import Perevagi from "@/source/components/home_page/perevagi/perevagi";

export default function Home() {


  return (
    <main>
      <Typer_text />
      <Swiper_home />
      <Nav_cards />
      <About_order />
      <Articles_nav />
      <Mebel_zakaz />
      <Perevagi />
    </main>



  );
}