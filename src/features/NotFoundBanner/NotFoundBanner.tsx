import styles from './NotFoundBanner.module.css'
import { FaInfoCircle } from 'react-icons/fa'
import clsx from 'clsx'

const NotFoundBanner = () => {
  return (
    <>
      <section
        className={clsx(
          styles.section,
          'h-100vh d-flex fd-column jc-center ai-center'
        )}
      >
        <FaInfoCircle className={clsx(styles.icon, 'c-primary')} />
        <h1 className={clsx(styles.title, 'c-text')}>Page not found</h1>
      </section>
    </>
  )
}

export { NotFoundBanner }
