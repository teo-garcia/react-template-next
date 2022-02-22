import styles from './ToolsDashboard.module.css';
import { FaReact, FaTools } from 'react-icons/fa';
import { Typography } from 'primitivex';

const tools = ['React', 'Next', 'Typescript', 'Jest', 'Playwright', 'Lodash'];

function ToolsDashboard() {
  return (
    <section className={styles.section}>
      <FaReact className={styles.reactIcon} />
      <Typography color="background" fontWeight="bold" className={styles.title}>
        React Template Next
      </Typography>
      <ul className={styles.toolsList}>
        {tools.map((tool) => (
          <li className={styles.toolsItem} key={tool}>
            <Typography tagName="p" fontWeight="bold">
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
