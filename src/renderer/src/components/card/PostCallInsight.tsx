import { CheckMark, CloseMark } from '@renderer/assets'
import { TDataPostCall } from '@renderer/types/Data'
import { CiViewBoard } from 'react-icons/ci'
import { BsShare } from 'react-icons/bs'

const PostCallInsight = ({ overall, date, duration, name, image }: TDataPostCall) => {
  let overallDescription: any
  if (overall === 100) {
    overallDescription = 'not bad trends'
  } else if (overall === 0) {
    overallDescription = `${name} heads up!`
  } else {
    overallDescription = `${overall}% good`
  }

  return (
    <div className="p-2 bg-white items-center rounded-[6px] w-full flex gap-2 drop-shadow-sm justify-between">
      <div className="flex gap-2 min-w-[200px] truncate max-w-[200px]">
        <img src={image} alt={name} className="object-contain rounded-xl w-[45px] h-[40px]" />
        <div>
          <h1 className="font-semibold truncate">{name}</h1>
          <p className="text-[12px] text-black/60">23th Call with</p>
        </div>
      </div>
      <div className="min-w-[150px]">
        <p className="tracking-tight font-semibold text-[12px]">{date}</p>
      </div>
      <div className="min-w-[150px]">
        <p className="tracking-tight font-semibold text-[12px]">{duration}</p>
      </div>
      <div className="min-w-[150px] flex gap-1.5 items-center">
        {overall > 49 ? (
          <img src={CheckMark} alt="CheckMark" />
        ) : (
          <img src={CloseMark} alt="Close Mark" />
        )}
        <p className="tracking-tight font-semibold text-[12px]">{overallDescription}</p>
      </div>
      <div className="min-w-[150px]">
        <button
          type="button"
          className="btn_outline rounded-[6px] flex items-center gap-1.5 py-1.5 px-3 text-[#2e6fff]"
        >
          <CiViewBoard size={20} />
          <span className="text-[12px]">View</span>
        </button>
      </div>
      <div className="min-w-[150px]">
        <button
          type="button"
          className="btn_outline rounded-[6px] flex items-center gap-1.5 py-1.5 px-3 text-[#2e6fff]"
        >
          <BsShare size={15} />
          <span className="text-[12px]">Share</span>
        </button>
      </div>
    </div>
  )
}

export default PostCallInsight
