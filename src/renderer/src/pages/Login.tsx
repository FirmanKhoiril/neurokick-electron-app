import { BrainLogo } from '@renderer/assets'
import { LeftRegister, SignIn, SignUp } from '@renderer/components'
import { useGlobalState } from '@renderer/context/ContextApi'

const Login = () => {
  const { isSignup } = useGlobalState()
  return (
    <div className="w-full h-screen p-3 flex items-center gap-2 bg-[#F6F9FF]">
      <LeftRegister />
      <div className="w-1/3 flex-col flex mx-auto h-[80%]">
        <div className="flex pb-10 gap-1">
          <img src={BrainLogo} alt="NeuroKick Logo" width={45} height={50} />
          <h1 className="font-bold tracking-tight text-4xl">NeuroKick</h1>
        </div>
        {isSignup ? <SignUp /> : <SignIn />}
      </div>
    </div>
  )
}

export default Login
