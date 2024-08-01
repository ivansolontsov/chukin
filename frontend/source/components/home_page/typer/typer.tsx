import { TypeAnimation } from 'react-type-animation';
import "./typer.scss"
 
export const Typer_text = () => {
  return (
    <div className="text-typing">
      <span>"Chukin🞄M"&nbsp;</span>
    <TypeAnimation
    
      sequence={[
        '- ЦЕ ЯКІСТЬ',
        3000,
        '- ЦЕ ДИЗАЙН', 
        3000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
      speed={1}
      style={{ fontSize: 'currentSize', display: 'inline-block' }}
    />
    </div>
  );
};