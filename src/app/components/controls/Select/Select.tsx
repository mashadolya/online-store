import React, { FC, useState } from 'react';
import { SelectTypes } from 'src/app/components/controls/Select/Select.types';
import * as S from 'src/app/components/controls/Select/Select.styles';

const Select: FC<SelectTypes> = ({ label, value, onChange, options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    onChange?.(value);
  };

  return (
    <S.SelectContainer>
      <label>{label}</label>
      <div>
        <select value={selectedOption} onChange={handleChange}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </S.SelectContainer>
  );
};

export default Select;
