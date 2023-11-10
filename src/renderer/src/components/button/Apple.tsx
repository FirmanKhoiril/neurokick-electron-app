import { AiFillApple } from 'react-icons/ai'
const Apple = () => {
  return (
    <button
      type="button"
      className="text-sm border border-[#98A2B3] rounded-[6px] py-2 bg-white tracking-tight flex items-center gap-2 px-2"
    >
      <AiFillApple size={25} color="black" />
      <p>Sign in with Apple</p>
    </button>
  )
}

export default Apple
