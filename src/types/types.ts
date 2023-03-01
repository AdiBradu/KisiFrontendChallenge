import React from 'react';

export interface Routes {
  path: string;
  element?: JSX.Element | undefined;
}

export interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export interface TextProps {
  text?: string;
}
