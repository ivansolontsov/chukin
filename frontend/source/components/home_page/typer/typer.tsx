'use client'

import { TypeAnimation } from "react-type-animation";
import "./typer.scss";
import { IDictionaries } from "@/dictionaries";

interface TyperTextProps {
  dictionary: IDictionaries;
}

export const Typer_text = ({ dictionary }: TyperTextProps) => {
  return (
    <div className="text-typing">
      <span>"Chukin🞄M"&nbsp;</span>
      <TypeAnimation
        sequence={[
          dictionary.typerText.text1,
          3000,
          dictionary.typerText.text2,
          3000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
        speed={1}
        style={{ fontSize: "currentSize", display: "inline-block" }}
      />
    </div>
  );
};
