import { Mic, Home, Logo } from '../../assets'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'

const Sidebar = () => {
  const location = useLocation()
  return (
    <aside className="min-h-screen min-w-[45px] h-full bg-sidebar py-2 w-full max-w-[45px] sm:max-w-[55px] flex flex-col items-center">
      <img
        src={Logo}
        alt="NeuroKick Logo"
        width={40}
        height={40}
        className="rounded-lg w-[35px] sm:w-[40px]"
      />
      <div className="pt-12 flex flex-col gap-4">
        <Link to={'/'}>
          <button
            type="button"
            className={`p-2 rounded-[6px] ${location.pathname === '/' && 'bg-white/20'}`}
          >
            <img src={Home} alt="Home Page" className="hover:opacity-90" width={18} height={25} />
          </button>
        </Link>
        <Link to={'/conversation'}>
          <button
            type="button"
            className={`p-2 rounded-[6px] ${
              location.pathname === '/conversation' && 'bg-white/20'
            }`}
          >
            <img
              src={Mic}
              alt="Conversation Page"
              className="hover:opacity-90"
              width={18}
              height={25}
            />
          </button>
        </Link>
        <Link to={'/profile'}>
          <button
            type="button"
            className={`p-2 rounded-[6px] ${location.pathname === '/profile' && 'bg-white/20'}`}
          >
            <AiOutlineUser size={18} className="hover:opacity-90" color="white" />
          </button>
        </Link>
        <Link to={'/setting'}>
          <button
            type="button"
            className={`p-2 rounded-[6px] ${location.pathname === '/setting' && 'bg-white/20'}`}
          >
            <AiOutlineSetting size={18} className="hover:opacity-90" color="white" />
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
