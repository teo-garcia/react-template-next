import { FaInfoCircle } from 'react-icons/fa'

const NotFoundBanner = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-12 bg-primary dark:bg-black">
      <FaInfoCircle className="size-32 text-black dark:text-primary lg:size-36" />
      <h1 className="text-5xl font-semibold text-black dark:text-primary lg:text-7xl">
        Page not found
      </h1>
    </section>
  )
}

export { NotFoundBanner }
