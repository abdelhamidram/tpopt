interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="form-input flex-1 mr-2"
    />
  );
};

export default InputField;
