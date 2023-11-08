import { dataPassCallInsight } from '@renderer/assets/DummyData'
import { PastCallInsightHead, PostCallInsight } from '@renderer/components'
import { TDataPostCall } from '@renderer/types/Data'
import { AiOutlineEye } from 'react-icons/ai'

const Home = () => {
  return (
    <div className="px-6">
      <div className="flex mt-2 justify-between border-b border-[#2e6fff] pb-4 pt-2 items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-[30px] font-semibold tracking-tight">Past Call Insights</h1>
          <p className="text-black/50">Lorem ipsum dolor sit amet.</p>
        </div>
        <button
          type="button"
          className="btn_outline text-[#2e6fff] flex items-center gap-1 px-4 py-1 rounded-[6px]"
        >
          <AiOutlineEye />
          <span>See all</span>
        </button>
      </div>
      <PastCallInsightHead />
      <div className="flex pb-2 max-h-[71vh] scrollbar-none overflow-y-auto flex-col gap-1.5">
        {dataPassCallInsight.map((item: TDataPostCall) => (
          <PostCallInsight {...item} />
        ))}
      </div>
    </div>
  )
}

export default Home
