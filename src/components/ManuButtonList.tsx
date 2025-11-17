import type { ManuButtonType } from "../types/ManuButtonType";
import ManuButton from "./ManuButton";

interface ManuButtonListProps {
  items: ManuButtonType[];
}

const ManuButtonList = ({ items }: ManuButtonListProps) => {
  return (
    <div className="bg-gray-700 h-20 flex justify-center items-center">
      <div className="w-100% flex justify-between gap-2">
        {items.map((item) => (
          <ManuButton key={item.id} value={item} />
        ))}
      </div>
    </div>
  );
};

export default ManuButtonList;
