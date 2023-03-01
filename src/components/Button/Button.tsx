import React from 'react';
// components
import { Paragraph } from '../Paragraph/Paragraph';
// types
import { ButtonProps } from '../../types/types';
// styles
import './Button.scss';

export const Button: React.FC<ButtonProps> = ({ onClick, classe }) => {
  return (
    <button type="button" className="loadButton" onClick={onClick}>
      <Paragraph text={'Load more'} />
    </button>
  );
};
