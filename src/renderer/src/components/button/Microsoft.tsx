import { MicrosoftLogo } from '@renderer/assets'

const Microsoft = () => {
  return (
    <button
      type="button"
      className="text-sm border border-[#98A2B3] rounded-[6px] py-2 bg-white tracking-tight flex items-center gap-2 px-2"
    >
      <img src={MicrosoftLogo} height={30} width={22} alt="Google Logo" />
      <p>Sign in with Microsoft</p>
    </button>
  )
}

export default Microsoft
