import { useGoogleLogin } from '@react-oauth/google'
import { LogoGoogle } from '@renderer/assets'
import { useGlobalState } from '@renderer/context/ContextApi'
import { toast } from 'sonner'

const Google = () => {
  const { setIsAuth } = useGlobalState()
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse)
      toast.success('Success Login with google')
      setIsAuth(true)
    },
    onError: () => toast.error('Something went wrong')
  })

  return (
    <button
      onClick={() => {
        login()
      }}
      type="button"
      className="text-sm border border-[#98A2B3] rounded-[6px] py-2 bg-white tracking-tight flex items-center gap-2 px-2"
    >
      <img src={LogoGoogle} height={30} width={25} alt="Google Logo" />
      <p>Sign in with Google</p>
    </button>
  )
}

export default Google
