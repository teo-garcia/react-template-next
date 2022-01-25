import styles from "./Button.module.css";
import classNames from "classnames";
import { ButtonProps } from "../../types/client";

function Button(props: ButtonProps) {
  const { className } = props;
  return <button className={classNames(styles.button, className)} {...props} />;
}

export { Button };
