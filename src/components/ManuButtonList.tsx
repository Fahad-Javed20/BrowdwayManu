import type { ManuButtonType } from "../types/ManuButtonType"
import ManuButton from "./ManuButton"

interface ManuButtonListProps {
    items:ManuButtonType[];
}

const ManuButtonList = ({items}:ManuButtonListProps) => {
  return (
    <div>
        {items.map((item)=>(
            <ManuButton
            key={item.id}
            manu = {item}
            />
        ))}
    </div>
  )
}

export default ManuButtonList
