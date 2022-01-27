import { GlobalProps } from '@utils/types/client';

function Global(props: GlobalProps) {
  const { children } = props;
  return <>{children}</>;
}

export { Global };
