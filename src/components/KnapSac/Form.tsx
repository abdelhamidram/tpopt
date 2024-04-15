import React from 'react';
import InputField from './InputField';
import Button from './Button';

interface FormProps {
  weights: string[];
  prices: string[];
  maxWeight: string;
  setWeights: React.Dispatch<React.SetStateAction<string[]>>;
  setPrices: React.Dispatch<React.SetStateAction<string[]>>;
  setMaxWeight: React.Dispatch<React.SetStateAction<string>>;
  handleAddItem: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ weights, prices, maxWeight, setWeights, setPrices, setMaxWeight, handleAddItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {weights.map((_, index) => (
        <div key={index} className="flex mb-4">
          <InputField
            value={weights[index]}
            onChange={(value) => {
              const newWeights = [...weights];
              newWeights[index] = value;
              setWeights(newWeights);
            }}
            placeholder="Weight"
          />
          <InputField
            value={prices[index]}
            onChange={(value) => {
              const newPrices = [...prices];
              newPrices[index] = value;
              setPrices(newPrices);
            }}
            placeholder="Price"
          />
        </div>
      ))}
      <div className="flex mb-4">
        <Button onClick={handleAddItem} />
        <input
          type="number"
          value={maxWeight}
          onChange={(e) => setMaxWeight(e.target.value)}
          placeholder="Maximum Weight"
          className="form-input flex-1 ml-4"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
      >
        Solve
      </button>
    </form>
  );
};

export default Form;
