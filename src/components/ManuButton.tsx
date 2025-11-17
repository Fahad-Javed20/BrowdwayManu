import type { ManuButtonType } from "../types/ManuButtonType"

interface ManuButtonProps {
    manu:ManuButtonType;
}

const ManuButton = ({manu}:ManuButtonProps) => {
  return (
    <div className=" p-2">
<button className=" bg-black text-white px-8 py-2 rounded hover:bg-yellow-400 hover:text-black transition-colors duration-500">
    {manu}
    </button>
    </div>
  )
}

export default ManuButton
