import { LeadershipCopilot, ToogleTranscript, Transcript } from '@renderer/components'
import { useGlobalState } from '@renderer/context/ContextApi'

const Speaking = () => {
  const { isTranscript } = useGlobalState()
  return (
    <section className="flex px-4 flex-col w-full ">
      <ToogleTranscript />

      {isTranscript ? (
        <Transcript />
      ) : (
        <>
          <div className="w-full bg-[#DCDCDC] py-2 px-4 rounded-[6px] mt-3 text-[12px] font-semibold">
            <p>Model GPT-3.5</p>
          </div>
          <LeadershipCopilot />
        </>
      )}
    </section>
  )
}

export default Speaking
