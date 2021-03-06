import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { container } from './CheckBox.module.scss';

const ICON_SIZE = 22;

export default function CheckBox({ label, selected, onChange }) {
  return (
    <button
      data-testid="checkbox"
      type="button"
      className={container}
      onClick={() => onChange(!selected)}
    >
      {selected ? (
        <MdCheckBox data-testid="checkedIcon" size={ICON_SIZE} />
      ) : (
        <MdCheckBoxOutlineBlank size={ICON_SIZE} />
      )}
      <p>{label}</p>
    </button>
  );
}
