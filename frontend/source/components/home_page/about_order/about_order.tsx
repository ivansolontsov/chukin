import Image from "next/image";
import s from "./about_order.module.scss"

export default function About_order() {

  return (
    <div className={s.aboutorder_conatainer_main}>
        <h2 className={s.title}>Працювати за нами - легко</h2>
        <div className={s.aboutorder_container_item_v1}>
          <p className={s.aboutorder_container_text}>Крок 1. Отримайте персоналізовану консультацію:
Наші консультанти готові надати якісну консультацію, щоб зрозуміти ваші потреби і бажання щодо меблів. Вони допоможуть обрати найкращі варіанти, що відповідають вашому стилю та бюджету.
          </p>
          <div className={s.aboutorder_img_container}>
            <Image
              className={s.aboutorder_img}
              src="/steps/step1.jpg"
              alt=""
              width={600}
              height={300}
            /></div>
        </div>
        <div className={s.aboutorder_container_item_v2}>
          <div className={s.aboutorder_img_container}>
            <Image
              className={s.aboutorder_img}
              src="/steps/step1.jpg"
              alt=""
              width={600}
              height={300}
            /></div>
          <p className={s.aboutorder_container_text}>Крок 2. Віртуальний огляд меблів з 3D моделюванням:
Ми використовуємо передові технології 3D моделювання для створення візуалізацій майбутніх меблів у вашому приміщенні. Це дозволяє вам точно уявити, як ваші індивідуальні меблі будуть виглядати в реальному просторі.
          </p>

        </div>
        <div className={s.aboutorder_container_item_v1}>
          <p className={s.aboutorder_container_text}>Крок 3. Розрахунок вартості з врахуванням обраних матеріалів:
Наші фахівці допоможуть вам підібрати ідеальні матеріали для вашого проекту та розрахують вартість виготовлення меблів з урахуванням вашого бюджету.
          </p>
          <div className={s.aboutorder_img_container}>
            <Image
              className={s.aboutorder_img}
              src="/steps/step1.jpg"
              alt=""
              width={600}
              height={300}
            /></div>
        </div>
        <div className={s.aboutorder_container_item_v2}>
          <div className={s.aboutorder_img_container}>
            <Image
              className={s.aboutorder_img}
              src="/steps/step1.jpg"
              alt=""
              width={600}
              height={300}
            /></div>
          <p className={s.aboutorder_container_text}>Крок 4. Точні заміри і укладення угоди:
Наші спеціалісти здійснюють виїзд для точних замірів і підписання угоди, щоб забезпечити ефективний процес виготовлення меблів та відповідність вашим вимогам.
          </p>
        </div>
        <div className={s.text1}><p>Ви задоволений власник якісних меблів!</p></div>
        <div className={s.text2}><p>Ми прагнемо досягти вашої повної задоволеності щодо кожної деталі ваших нових меблів. Наша команда забезпечує високий стандарт якості і дотримується ваших індивідуальних бажань, щоб кожен етап співпраці з нами був приємним і результативним досвідом.</p></div>


      </div>

  )
}