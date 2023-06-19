import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className='bg-slate-100'>
      <Header brand='Estore' />
      <main className='container mx-auto min-h-[75vh] w-full   py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
