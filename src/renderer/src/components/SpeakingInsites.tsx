import { useGlobalState } from '@renderer/context/ContextApi'
import { AiOutlineRight } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
const SpeakingInsites = () => {
  const { toogleSpeakInsites, setToogleSpeakInsites } = useGlobalState()
  return (
    <div
      className={`${
        toogleSpeakInsites ? 'translate-x-[0%]' : 'translate-x-[100%]'
      } transition duration-[600ms] overflow-y-auto shadow-xl fixed right-0 bg-white min-w-[400px] py-2 pl-6 h-screen top-0 z-10`}
    >
      <div className="text-[#2e6fff]  py-2 flex items-center gap-3">
        <button
          type="button"
          className=" border rounded-[6px] p-1 -ml-7 border-[#2e6fff]"
          onClick={() => setToogleSpeakInsites(false)}
        >
          <AiOutlineRight size={25} />
        </button>
        <h1 className="font-semibold text-lg tracking-tight">Speaking Insites</h1>
      </div>
      <div className="py-5 border-b border-[#2e6fff] flex gap-2 items-center">
        <button
          type="button"
          className="text-[12px] rounded-[6px] bg-primary text-white min-w-[140px] py-2.5"
        >
          Analysis
        </button>
        <button
          type="button"
          className="text-[12px] rounded-[6px] border-[#2e6fff] text-[#2e6fff] border  min-w-[140px] py-2.5"
        >
          Comments
        </button>
      </div>

      <div className="w-full pr-4 mt-4 flex flex-col gap-2">
        <div className="border cursor-pointer border-[#cfcdcd] flex items-center justify-between py-3 px-4 rounded-[6px]">
          <div className="flex items-center justify-between w-full gap-2">
            <h1 className="font-semibold">Analysis 1</h1>
            <div className="flex gap-2 items-center">
              <p className="text-[#2e6fff] font-semibold tracking-tight">meta data</p>
              <MdArrowDropDown />
            </div>
          </div>
        </div>
        <div className="border cursor-pointer flex flex-col border-[#cfcdcd] py-3 px-4 rounded-[6px]">
          <div className="flex items-center justify-between w-full gap-2">
            <h1 className="font-semibold">Analysis 2</h1>
            <div className="flex gap-2 items-center">
              <p className="text-[#2e6fff] font-semibold tracking-tight">meta data</p>
              <MdArrowDropDown />
            </div>
          </div>
          <div className="h-[80px] text-black/90">
            {/* Detail Card */}
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeakingInsites
