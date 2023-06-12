import {Outlet, Link, useLocation} from 'react-router-dom'
const Layout = () => {
    const location = useLocation();
  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h2 className='text-2xl font-black text-center text-white'> CRM React </h2>
            <nav className='mt-10'>
                <Link 
                    className={`${location.pathname === '/' ? 'text-blue-500': 'text-white'} 'text-1xl block mt-2 hover:text-blue-300'`}
                    to='/'>Customers</Link>
                <Link
                    className={`${location.pathname === '/customers/new' ? 'text-blue-500': 'text-white'} 'text-1xl block mt-2 hover:text-blue-300'`}
                    to='/customers/new'>New Customer</Link>
            </nav>
        
        </aside>

        <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout