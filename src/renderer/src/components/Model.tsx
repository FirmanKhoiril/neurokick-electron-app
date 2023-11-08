import { useGlobalState } from '@renderer/context/ContextApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Model = () => {
  const { setToogleNewCall, nameCall, setNameCall, setIsTranscript } = useGlobalState()

  const navigation = useNavigate()
  return (
    <div className="absolute top-0 z-20 flex items-center justify-center h-screen w-full">
      <div className="w-[450px] flex justify-between py-6 px-4 flex-col gap-2 h-[200px] bg-white drop-shadow-md rounded-[6px]">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-[16px] font-[500]">Leadership Copilot 2.0</h1>
            <p className="text-[12px] cursor-default pt-1 text-black/60">
              Enter the name of the person you will be speaking to and click "Yes, confirm"
            </p>
          </div>
          <input
            type="text"
            value={nameCall}
            onChange={(e) => setNameCall(e.target.value)}
            className="outline-none placeholder:text-[12px] border-[#AEC9FF] border py-2.5 px-2 rounded-[6px]"
            placeholder="Enter name here..."
          />
        </div>
        <div className="flex w-full justify-end gap-4">
          <button
            type="button"
            className="px-8 py-2 border border-[#2e6fff] text-[#2e6fff] drop-shadow-md text-[12px] rounded-[6px]"
            onClick={() => {
              setToogleNewCall(false)
              setNameCall('')
            }}
          >
            No, cancel
          </button>
          <button
            className="bg-primary px-8 py-2 text-[12px] drop-shadow-md rounded-[6px] text-white"
            type="button"
            onClick={() => {
              if (nameCall !== '') {
                setToogleNewCall(false)
                setIsTranscript(false)
                navigation('/conversation')
              } else {
                toast.error('Input must have value')
              }
            }}
          >
            Yes, confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Model
