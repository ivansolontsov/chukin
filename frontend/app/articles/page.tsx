import Link from "next/link";
import Image from "next/image";




export default function article_catalog() {

    return (
        <main>
            <h1 className="articles_catalog_header">Статті</h1>
            <div className="articles_catalog_items">
            <Link className="link_button" href="/articles/example"><div className="article_catalog_item">
                    <div className="article_catalog_item_top">
                    <Image
                        className="articles_image"
                        src="/articles/news1.jpg"
                        alt=""
                        width={500}
                        height={300}
                    />
                    <h3 className="aritcles_catalog_item_title">Пример заголовка</h3>
                    <p className="articles_catalog_item_descp">Пример краткого содержания Пример краткого содержания Пример краткого содержания Пример краткого содержания 
                    Пример краткого содержания Пример краткого содержания</p>
                    </div>
                    <div className="article_catalog_item_bottom">
                        <div className="article_catalog_item_bottom_left">
                        <span className="article_catalog_item_date_top">Дата создания:</span>
                        <span className="article_catalog_item_date">14.14.24</span>
                        </div>
                        <div className="article_catalog_item_bottom_right">
                        <span className="article_catalog_item_readnext">Читать далее</span>
                        </div>
                    </div>
                </div></Link>
                
                
                
                
                


            </div>












        </main>











    );
}