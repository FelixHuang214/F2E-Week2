import {
  Container,
  Label,
  StyledInput,
  ErrorMessage,
} from "./input-field.style";

export const Input = ({ placeholder, setInputValue, name, inputValue }) => {
  const handleChangeValue = (e) => {
    const { name, value } = e.target;

    if (inputValue === null) return;

    if (typeof inputValue === "string") {
      setInputValue(value);
    } else if (typeof inputValue === "object") {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      onChange={(e) => handleChangeValue(e)}
      value={inputValue === "string" ? inputValue : inputValue[name]}
    />
  );
};

const InputField = ({
  label,
  placeholder,
  className,
  name,
  setInputValue,
  inputValue,
  error
}) => {
  return (
    <Container className={`${className ? className : ""}`}>
      {label && <Label>{label}</Label>}
      <Input
        error={error}
        placeholder={placeholder}
        name={name}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputField;
