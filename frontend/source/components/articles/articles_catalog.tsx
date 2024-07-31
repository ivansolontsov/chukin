import Link from "next/link";
import Image from "next/image";
import s from "./articles_catalog.module.scss"

export default function article_catalog() {

    return (
        <main>
            <h1 className={s.articles_catalog_header}>Статті</h1>
            <div className={s.articles_catalog_items}>
            <Link className={s.link_button} href="/articles/example"><div className={s.article_catalog_item}>
                    <div className={s.article_catalog_item_top}>
                    <Image
                        className={s.articles_image}
                        src="/articles/news1.jpg"
                        alt=""
                        width={500}
                        height={300}
                    />
                    <h3 className={s.aritcles_catalog_item_title}>Пример заголовка</h3>
                    <p className={s.articles_catalog_item_descp}>Пример краткого содержания Пример краткого содержания Пример краткого содержания Пример краткого содержания 
                    Пример краткого содержания Пример краткого содержания</p>
                    </div>
                    <div className={s.article_catalog_item_bottom}>
                        <div className={s.article_catalog_item_bottom_left}>
                        <span className={s.article_catalog_item_date_top}>Дата создания:</span>
                        <span className={s.article_catalog_item_date}>14.14.24</span>
                        </div>
                        <div className={s.article_catalog_item_bottom_right}>
                        <span className={s.article_catalog_item_readnext}>Читать далее</span>
                        </div>
                    </div>
                </div></Link>
                
                
                
                
                


            </div>












        </main>











    );
}