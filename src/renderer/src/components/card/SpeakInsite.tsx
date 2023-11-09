import { useGlobalState } from '@renderer/context/ContextApi'
import { TDataSpeakingAnalysis } from '@renderer/types/Data'
import { MdArrowDropDown, MdOutlineArrowRight } from 'react-icons/md'

const SpeakInsite = ({ id, image }: TDataSpeakingAnalysis) => {
  const { setSpeakAnalysisId, speakAnalysisId } = useGlobalState()
  return (
    <div className="border cursor-pointer flex flex-col border-[#cfcdcd] py-3 px-4 rounded-[6px]">
      <div className="flex items-center justify-between w-full gap-2">
        <h1 className="font-semibold">Analysis 2</h1>
        <div className="flex gap-2 items-center">
          <p className="text-[#2e6fff] font-semibold tracking-tight">meta data</p>
          <button
            type="button"
            onClick={() => {
              if (speakAnalysisId !== id) {
                setSpeakAnalysisId(id)
              } else {
                setSpeakAnalysisId('')
              }
            }}
          >
            {speakAnalysisId === id ? <MdArrowDropDown size={20} /> : <MdOutlineArrowRight />}
          </button>
        </div>
      </div>
      {speakAnalysisId === id && (
        <div className="h-[480px] text-black/90 pt-20">
          <img src={image} alt="Speaking Analysis" width={350} height={341} />
        </div>
      )}
    </div>
  )
}

export default SpeakInsite
