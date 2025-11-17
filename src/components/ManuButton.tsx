import type { ManuButtonType } from "../types/ManuButtonType";

interface ManuButtonProps {
  value: ManuButtonType;
}

const ManuButton = ({ value }: ManuButtonProps) => {
  return (
    <div>
      <button className=" flex bg-black text-white px-3 py-2 rounded hover:bg-yellow-400 hover:text-black transition-colors duration-500">
        {value.title}
      </button>
    </div>
  );
};

export default ManuButton;
