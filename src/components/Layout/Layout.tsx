import styles from './Layout.module.css';
import { LayoutProps } from '../../types/client';

function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <header />
      <main className={styles.main}>{children}</main>
      <footer />
    </div>
  );
}

export { Layout };
