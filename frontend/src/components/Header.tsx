import { Button } from "./ui/button"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X, ShoppingCart, User2 } from "lucide-react"

const menuItems = [
  {
    name: "Login",
    path: "#",
    icon: <User2 />,
  },
]

interface HeaderProps {
  brand: string
}

const Header = ({ brand }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      data-testid='header'
      className='relative w-full border-b-2 bg-white dark:bg-slate-900 dark:text-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center '>
          <span className='text-2xl font-semibold'>{brand}</span>
        </div>
        <div className='ml-auto hidden lg:block'>
          <ul className='inline-flex space-x-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className='flex items-center justify-center text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white'>
                  {item.name}
                  {item.icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden lg:block'>
          <Button className='ml-6'>
            Cart &nbsp; <ShoppingCart fill='#fff' />
          </Button>
        </div>
        <div className='lg:hidden'>
          <Menu onClick={toggleMenu} className='h-6 w-6 cursor-pointer' />
        </div>
        {isMenuOpen && (
          <div className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden'>
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pb-6 pt-5'>
                <div className='flex items-center justify-between'>
                  <div className='inline-flex items-center space-x-2'>
                    <span className='font-bold'>{brand}</span>
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      onClick={toggleMenu}
                      className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
                      <span className='sr-only'>Close menu</span>
                      <X className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-4'>
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className='-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50'>
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                  <Button className='mt-4 w-full'>Cart</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
