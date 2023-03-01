import { ReactComponentElement, ReactElement, ReactNode } from 'react';

export interface Routes {
  path: string;
  element?: JSX.Element | undefined;
}

export interface LayoutProps {
  children?: ReactElement | ReactNode;
}

export interface TextProps {
  text?: string;
  classe?: string;
}

export interface CardProps {
  key?: string;
  src?: string;
  alt?: string;
  subtitle?: string;
  description?: string;
}

export interface ImageProps {
  id?: string;
  alt_description?: string | undefined;
  urls?: {
    small: string | undefined;
  };
  user?: {
    first_name: string | undefined;
  };
}

export interface ButtonProps {
  onClick: () => void;
  classe: string;
}
