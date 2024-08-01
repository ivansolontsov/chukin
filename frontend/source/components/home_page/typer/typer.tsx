import { TypeAnimation } from 'react-type-animation';
import "./typer.scss"
 
export const Typer_text = () => {
  return (
    <div className="text-typing">
      <span>"Chukin🞄M"&nbsp;</span>
    <TypeAnimation
    
      sequence={[
        '- ЦЕ ЯКІСТЬ', // Types 'One'
        3000, // Waits 1s
        '- ЦЕ ДИЗАЙН', // Deletes 'One' and types 'Two'
        3000, // Waits 2s
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