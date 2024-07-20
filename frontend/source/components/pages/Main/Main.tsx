import s from "./Main.module.scss";
import { type FC, memo } from "react";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return <div className={s.yourClassName}>fdas</div>;
};

export default memo(Main);
