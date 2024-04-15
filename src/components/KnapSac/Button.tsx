import { PlusCircleIcon } from '@heroicons/react/outline';
interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
    >
      <PlusCircleIcon className="w-6 h-6 mr-2" />
      Add Item
    </button>
  );
};

export default Button;
