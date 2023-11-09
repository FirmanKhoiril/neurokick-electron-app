import { useGlobalState } from '@renderer/context/ContextApi'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignIn = () => {
  const { showPassword, setShowPassword, setIsSignup } = useGlobalState()
  return (
    <form>
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col relative pt-3 gap-2">
        <label htmlFor="password" className="font-semibold tracking-tight">
          Password*
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Enter your password"
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
      <div className="pt-2 pb-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-[13px] text-black/70">Remember me</p>
        </div>
        <a
          href="#"
          className="text-[12px] hover:underline text-black/70 hover:text-black cursor-pointer"
        >
          Forgot Password ?
        </a>
      </div>
      <button
        type="submit"
        className="bg-primary rounded-[6px] py-2.5 text-white text-[12px] w-full"
      >
        Log in
      </button>
      <div className="w-full justify-center flex py-4">
        <p>Don't have an account?</p>
        <button
          type="button"
          className="pl-2 tracking-tight font-semibold text-blue-500"
          onClick={() => setIsSignup(true)}
        >
          Sign up
        </button>
      </div>
    </form>
  )
}

export default SignIn
