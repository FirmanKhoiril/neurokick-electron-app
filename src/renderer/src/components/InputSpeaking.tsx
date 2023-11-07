import { useGlobalState } from '@renderer/context/ContextApi'
import { BiMicrophone } from 'react-icons/bi'

const InputSpeaking = () => {
  const { isTranscript } = useGlobalState()
  return (
    <div className="flex flex-col gap-2">
      <form
        className={`px-3 sm:px-4 relative flex w-full gap-2.5 ${isTranscript ? 'py-5' : 'pt-5'}`}
      >
        <input
          type="text"
          placeholder={isTranscript ? 'Recording....' : 'Write a message'}
          disabled={isTranscript}
          className={`flex-grow border outline-none ${
            isTranscript ? 'pl-8' : 'pl-2'
          }  text-sm pr-4 placeholder:text-[12px]  bg-[#F1F1F1] placeholder:tracking-tight placeholder:text-black/80 border-[#2e6fff] rounded-[6px]`}
        />
        {isTranscript && (
          <button type="button" className="absolute left-6 top-7">
            <BiMicrophone size={18} color="#2e6fff" />
          </button>
        )}
        <button
          type="button"
          className="text-[12px] bg-primary min-w-[130px] sm:w-[190px] tracking-tight text-white py-2 rounded-[6px]"
        >
          {isTranscript ? 'Save and Quit' : ' Send message'}
        </button>
      </form>
      {!isTranscript && <p className="px-10 text-[12px] pb-3">Listening...</p>}
    </div>
  )
}

export default InputSpeaking
