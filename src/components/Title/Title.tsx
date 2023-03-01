import React from 'react';
// types
import { TextProps } from '../../types/types';

export const Title: React.FC<TextProps> = ({ text }) => {
  return <h1>{text}</h1>;
};
