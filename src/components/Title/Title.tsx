import React from 'react';
// types
import { TextProps } from '../../types/types';

export const Title: React.FC<TextProps> = ({ text, classe }) => {
  return <h1 className={classe}>{text}</h1>;
};
