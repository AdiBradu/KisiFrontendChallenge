import React from 'react';
import styles from './Layout.module.css';
// types
import { LayoutProps } from '../types/types';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
