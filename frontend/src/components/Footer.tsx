const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='mx-auto flex max-w-7xl justify-center border-t-2   dark:bg-slate-900'>
      <footer className='px-4 py-10'>
        <p className='text-base font-semibold text-gray-700 dark:text-white'>
          Estore &copy; {currentYear}
        </p>
      </footer>
    </div>
  )
}

export default Footer
