import { useGlobalState } from '@renderer/context/ContextApi'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignUp = () => {
  const { showPassword, setShowPassword, setIsSignup } = useGlobalState()
  return (
    <form>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold tracking-tight">
          Name*
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          required
          className="outline-none border border-gray-300 rounded-[6px] py-2.5 px-2 placeholder:text-sm text-sm"
        />
      </div>
      <div className="flex flex-col pt-2 gap-2">
        <label htmlFor="email" className="font-semibold tracking-tight">
          Email*
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          className="outline-none border border-gray-300 rounded-[6px] py-2.5 px-2 placeholder:text-sm text-sm"
        />
      </div>
      <div className="flex flex-col relative pt-2 gap-2">
        <label htmlFor="password" className="font-semibold tracking-tight">
          Password*
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Create a password"
          required
          className="outline-none border border-gray-300 rounded-[6px] py-2.5 px-2 placeholder:text-sm text-sm"
        />
        <button
          type="button"
          className="absolute bottom-3 right-4"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div>
      <div className="pt-1 pb-6">
        <p className="text-[11px] text-black/80">Must be 8 characters.</p>
      </div>
      <button
        type="submit"
        className="bg-primary rounded-[6px] py-2.5 text-white text-[12px] w-full"
      >
        Sign up
      </button>
      <div className="w-full justify-center flex py-4">
        <p>Already have an account?</p>
        <button
          type="button"
          className="pl-2 tracking-tight font-semibold text-blue-500"
          onClick={() => setIsSignup(false)}
        >
          Sign in
        </button>
      </div>
    </form>
  )
}

export default SignUp
