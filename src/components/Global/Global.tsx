import { GlobalProps } from "../../types/client";

function Global(props: GlobalProps) {
  const { children } = props;
  return <>{children}</>;
}

export { Global };
