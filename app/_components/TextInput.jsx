const TextInput = ({ inputName, value, onChange, label }) => {
  return (
    <div className="input__container">
      <label htmlFor={inputName} className="copy">
        {label}
      </label>
      <input
        type="text"
        className="input input__text input--beige"
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
