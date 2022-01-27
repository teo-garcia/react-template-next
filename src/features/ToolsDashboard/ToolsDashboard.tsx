import styles from './ToolsDashboard.module.css';
import { Typography } from '@components/Typography/Typography';
import { FaReact, FaTools } from 'react-icons/fa';

const tools = ['React', 'Next', 'Typescript', 'Jest', 'Playwright', 'Lodash'];

function ToolsDashboard() {
  return (
    <section className={styles.section}>
      <FaReact className={styles.reactIcon} />
      <Typography color="background" weight="bold" className={styles.title}>
        React Template Next
      </Typography>
      <ul className={styles.toolsList}>
        {tools.map((tool) => (
          <li className={styles.toolsItem} key={tool}>
            <Typography tagName="p" weight="bold">
              {tool}
            </Typography>
            <FaTools className={styles.toolIcon} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export { ToolsDashboard };
