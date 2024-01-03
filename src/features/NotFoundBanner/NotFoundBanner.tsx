import { FaInfoCircle } from 'react-icons/fa'

const NotFoundBanner = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-12 bg-primary dark:bg-black">
      <FaInfoCircle className="h-32 w-32 text-black lg:h-36 lg:w-36 dark:text-primary" />
      <h1 className="text-5xl font-semibold text-black lg:text-7xl dark:text-primary">
        Page not found
      </h1>
    </section>
  )
}

export { NotFoundBanner }
