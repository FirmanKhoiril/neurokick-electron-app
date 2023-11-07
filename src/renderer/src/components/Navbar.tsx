import { FiSearch } from 'react-icons/fi'
import { BsPlusCircle, BsShare } from 'react-icons/bs'
import Notification from '../assets/Notification.svg'

const Navbar = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <nav className="w-full bg-[#E5EDFF] flex justify-between items-center px-4 sm:px-6 py-3">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          required
          className="bg-[#E5EDFF] w-[200px]  sm:w-[280px] md:w-[350px] py-1.5 pl-8 pr-2 border-[#AEC9FF] focus:border-[#79a5fe] outline-none border rounded-[6px] tracking-tight placeholder:text-[#88B0FF] placeholder:text-sm"
          placeholder="Search..."
        />
        <button
          type="submit"
          aria-label="submitSearch"
          name="submitSearch"
          className="absolute left-2 text-[#88B0FF] top-[9px]"
        >
          <FiSearch size={18} />
        </button>
      </form>
      <div className="flex gap-2 items-center">
        <button
          type="button"
          name="MakeNewCall"
          aria-label="MakeNewCall"
          className="flex text-[12px] text-white py-2 px-2 sm:px-4 rounded-[6px] items-center gap-2 bg-primary"
        >
          <BsPlusCircle size={14} />
          <span className="sm:block hidden">Start new call</span>
        </button>
        <button
          type="button"
          className="bg-white flex gap-2 text-[12px] items-center px-2.5 sm:px-4 py-2.5 sm:py-2 rounded-[6px]"
          name="Share"
          aria-label="Share"
        >
          <BsShare size={14} />
          <span className="sm:block hidden">Share</span>
        </button>
        <button
          type="button"
          name="Notification"
          aria-label="Notification"
          className="relative p-2"
        >
          <img src={Notification} alt="Notification" width={20} height={20} />
          <span className="absolute h-[7px] rounded-full top-[5px] w-[7px] bg-red-400"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
