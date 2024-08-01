import Image from "next/image";
import s from "./about_order.module.scss"

export default function About_order() {

  return (
    <div className={s.aboutorder_conatainer_main}>
      <h2 className={s.title}>Працювати за нами - легко</h2>
      <div className={s.aboutorder_container_item_v1}>
        <div className={s.textblock_container}>
          <div className={s.text_title_container}><span className={s.text_title}>Крок 1. Отримайте персоналізовану консультацію</span></div>
        <p className={s.aboutorder_container_text}>Під час консультації будуть проаналізовані ваші побажання і вимоги. Вам будуть запропоновані оптимальні рішення, враховуючи ергономіку, стиль та функціональність вашого простору.
        </p>
        </div>
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
            src="/steps/step2.jpg"
            alt=""
            width={600}
            height={300}
          /></div>
          <div className={s.textblock_container}>
          <div className={s.text_title_container}><span className={s.text_title}>Крок 2. Віртуальний огляд меблів з 3D моделюванням</span></div>
        <p className={s.aboutorder_container_text}> Дизайнерами, за допомогою сучасних програм 3D-моделювання, буде створена  детальна візуалізація вашого інтер'єру. Ви зможете побачити точні розміри, стиль і розташування меблів у вашому приміщенні, що дозволить внести корективи ще на етапі проектування.
        </p>
        </div>
      </div>
      <div className={s.aboutorder_container_item_v1}>
        <div className={s.textblock_container}>
        <div className={s.text_title_container}><span className={s.text_title}>Крок 3. Розрахунок вартості з врахуванням обраних матеріалів</span></div>
        <p className={s.aboutorder_container_text}>Спеціалісти допоможуть вам обрати найкращі варіанти, враховуючи довговічність, естетику і ваш бюджет. Ми проведемо детальний розрахунок вартості виробу, включаючи всі витрати, щоб ви отримали повну картину фінансових витрат.
        </p>
        </div>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step3.jpg"
            alt=""
            width={600}
            height={300}
          /></div>
      </div>
      <div className={s.aboutorder_container_item_v2}>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step4.jpg"
            alt=""
            width={600}
            height={300}
          /></div>
          <div className={s.textblock_container}>
          <div className={s.text_title_container}><span className={s.text_title}>Крок 4. Точні заміри і укладення угоди</span></div>
        <p className={s.aboutorder_container_text}> Зустріч з представником компанії, який проведе точні виміри приміщення, що забезпечить ідеальне вписування меблів. Після цього ми підготуємо і укладемо детальний договір, що міститиме всі умови співпраці, терміни виконання і гарантії.
        </p>
        </div>
      </div>
      <div className={s.aboutorder_container_item_v1}>
        <div className={s.textblock_container}>
        <div className={s.text_title_container}><span className={s.text_title}>Заключення. Ви задоволений власник неперевершених меблів</span></div>
        <p className={s.aboutorder_container_text}>Отримуєте якісні меблі, створені з урахуванням всіх ваших побажань та технічних вимог. Ми гарантуємо високу якість виготовлення і повне задоволення від результату, підтверджене багаторічним досвідом нашої команди.
        </p>
        </div>
        <div className={s.aboutorder_img_container}>
          <Image
            className={s.aboutorder_img}
            src="/steps/step5.jpg"
            alt=""
            width={600}
            height={300}
          /></div>
      </div>
      


    </div>

  )
}