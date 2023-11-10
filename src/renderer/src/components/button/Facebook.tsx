import { BsFacebook } from 'react-icons/bs'

const Facebook = () => {
  return (
    <button
      type="button"
      className="text-sm border border-[#98A2B3] rounded-[6px] py-2 bg-white tracking-tight flex items-center gap-2 px-2"
    >
      <BsFacebook size={20} color="#3b82f6" />
      <p>Sign in with Facebook</p>
    </button>
  )
}

export default Facebook
