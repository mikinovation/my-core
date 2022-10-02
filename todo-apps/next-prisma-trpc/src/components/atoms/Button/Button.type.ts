import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BUTTON_COLOR, BUTTON_SIZE } from './Button.const';

export type ButtonColor = typeof BUTTON_COLOR[keyof typeof BUTTON_COLOR];

export type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

export interface BaseButton {
  color?: ButtonColor;
  size?: ButtonSize;
  children: ReactNode;
}

export type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseButton;
