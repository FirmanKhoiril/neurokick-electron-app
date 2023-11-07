import { useGlobalState } from '@renderer/context/ContextApi'
import { AiOutlineLeft } from 'react-icons/ai'

const ToogleTranscript = () => {
  const { isTranscript, setIsTranscript } = useGlobalState()
  return (
    <div className="flex items-center justify-between  pt-2 pb-4 border-b border-[#2e6fff] pl-4 w-full">
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={isTranscript}
          onClick={() => setIsTranscript(true)}
          className="text-[12px] rounded-[6px] border-[#2e6fff] text-[#2e6fff] border disabled:border-transparent disabled:bg-primary disabled:text-white min-w-[140px] py-2"
        >
          Transcript
        </button>
        <button
          type="button"
          disabled={isTranscript === false}
          onClick={() => setIsTranscript(false)}
          className="text-[12px] border-[#2e6fff] text-[#2e6fff] border disabled:border-transparent disabled:bg-primary disabled:text-white rounded-[6px] min-w-[140px] py-2"
        >
          Leadership 2.0 Coach
        </button>
      </div>
      {!isTranscript && (
        <button
          type="button"
          className="text-[12px] flex items-center gap-1 border px-4 rounded-[6px] border-[#2e6fff] text-[#2e6fff] min-w-[140px] py-2"
        >
          <AiOutlineLeft />
          <span>Speaking Insites</span>
        </button>
      )}
    </div>
  )
}

export default ToogleTranscript
