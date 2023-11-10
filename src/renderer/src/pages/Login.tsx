import { BrainLogo } from '@renderer/assets'
import {
  Apple,
  Facebook,
  Google,
  Microsoft,
  LeftRegister,
  SignIn,
  SignUp
} from '@renderer/components'
import { useGlobalState } from '@renderer/context/ContextApi'

const Login = () => {
  const { isSignup } = useGlobalState()
  return (
    <div className="w-full h-screen p-3 flex items-center gap-2 bg-[#F6F9FF]">
      <LeftRegister />
      <div className="w-1/3 flex-col justify-between flex mx-auto h-[90%]">
        <div className="flex pb-8 gap-1">
          <img src={BrainLogo} alt="NeuroKick Logo" width={45} height={50} />
          <h1 className="font-bold tracking-tight text-4xl">NeuroKick</h1>
        </div>
        {isSignup ? <SignUp /> : <SignIn />}
        <p className=" text-center text-gray-500">or</p>
        <div className=" grid grid-cols-2 grid-rows-2 items-center gap-1.5">
          <Google />
          <Apple />
          <Facebook />
          <Microsoft />
        </div>
        <div className="flex items-center justify-between text-sm ">
          <button type="button" className="font-semibold text-[#2e6fff]">
            Terms
          </button>
          <button type="button" className="font-semibold text-[#2e6fff]">
            Privacy
          </button>
          <button type="button" className="font-semibold text-[#2e6fff]">
            About us
          </button>
          <button type="button" className="text-gray-600">
            Contact Copilot 2.0
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
