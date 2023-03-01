import React from 'react';
import './Layout.scss';
// types
import { LayoutProps } from '../types/types';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <section className="layout">{children}</section>;
};
