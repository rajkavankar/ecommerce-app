import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className=''>
      <Header brand='Estore' />
      <main className='container mx-auto min-h-[75vh] py-8  bg-slate-100'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
