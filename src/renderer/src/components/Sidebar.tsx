import Logo from '../assets/Logo.png'
import Home from '../assets/Home.svg'
import Mic from '../assets/Mic.svg'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <aside className="min-h-screen h-full bg-sidebar py-2 w-full max-w-[45px] sm:max-w-[55px] flex flex-col items-center">
      <img
        src={Logo}
        alt="NeuroKick Logo"
        width={40}
        height={40}
        className="rounded-lg w-[35px] sm:w-[40px]"
      />
      <div className="pt-12 flex flex-col gap-8">
        <Link to={'/'}>
          <img src={Home} alt="Home Page" className="hover:opacity-90" width={18} height={25} />
        </Link>
        <Link to={'/conversation'}>
          <img
            src={Mic}
            alt="Conversation Page"
            className="hover:opacity-90"
            width={18}
            height={25}
          />
        </Link>
        <Link to={'/profile'}>
          <AiOutlineUser size={18} className="hover:opacity-90" color="white" />
        </Link>
        <Link to={'/setting'}>
          <AiOutlineSetting size={18} className="hover:opacity-90" color="white" />
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
