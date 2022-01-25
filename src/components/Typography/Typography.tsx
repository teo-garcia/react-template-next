import styles from "./Typography.module.css";
import { TypographyProps } from "../../types/client";
import classNames from "classnames";

function Typography(props: TypographyProps) {
  const {
    tagName = "p",
    className,
    weight = "regular",
    color = "text",
    ...rest
  } = props;
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={classNames(
        "typography",
        styles[weight],
        styles[color],
        className
      )}
      {...rest}
    />
  );
}

export { Typography };
