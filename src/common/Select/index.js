import React, { useState, useEffect } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import cn from 'classnames';
import './styles.scss';

export default function Select({
  label,
  value,
  options = [],
  id,
  onChange = () => {},
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [defaultValue, setDefaultValue] = useState(value || 'Selecione...');
  const [optionsList, setOptionsList] = useState(options);

  const handleClickOutside = (e) => {
    const { classList } = e.target;

    if (
      !classList.contains('option') &&
      !classList.contains('selected-option')
    ) {
      setShowOptions(false);
    }
  };

  const handleSelectOption = (e) => {
    setOptionsList(
      optionsList.map((option) => {
        return option.key === e.key
          ? { ...option, selected: true }
          : { ...option, selected: false };
      })
    );
    setDefaultValue(e.name);
    setShowOptions(false);
    onChange(e);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className="selectInput">
      <button
        className="selectInput--button"
        type="button"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p className="selectInput--button--label" label={id}>
          {label}
        </p>

        <div className="selectInput--button--content">
          <p>{defaultValue}</p>

          {showOptions ? (
            <MdArrowDropUp className="selectArrow" />
          ) : (
            <MdArrowDropDown className="selectArrow" />
          )}
        </div>
      </button>

      {showOptions && (
        <ul className="selectOptionList" id={id}>
          {optionsList.map((option) => (
            <li className="selectOptionList--option">
              <button
                type="button"
                key={option.key}
                className={cn(
                  'selectOptionList--optionButton',
                  option.selected && 'selectOptionList--optionButton-selected'
                )}
                onClick={() => handleSelectOption(option)}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
