import s from "./Main.module.scss";
import { type FC, memo } from "react";
import { IconFacebook } from "@/source/components/icons/ExampleIcon";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <div className={s.yourClassName}>
      <IconFacebook className={s.yourClassNameForIcon} />
    </div>
  );
};

export default memo(Main);
