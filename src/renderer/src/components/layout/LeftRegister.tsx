import { Brain, BrainLeft } from '@renderer/assets'

const LeftRegister = () => {
  return (
    <div className="w-1/2 h-full flex flex-col justify-between pb-10 relative  text-[#C9DDFE] rounded-lg bg-register">
      <img src={Brain} alt="Big Brain" />
      <img
        src={BrainLeft}
        alt="Piece of Brain"
        className="absolute top-8 right-0 "
        width={175}
        height={200}
      />
      <div className="flex flex-col px-10 gap-6">
        <h1 className="text-[20px]">
          Realize your full leadership <br /> professional potential with <br /> NeuroKick
        </h1>
        <p className="text-[13px]">
          Improve your leadership roll through <br /> your routine communication.
        </p>
      </div>
    </div>
  )
}

export default LeftRegister
