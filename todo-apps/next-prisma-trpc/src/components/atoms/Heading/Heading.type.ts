import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Tag } from './Heading.const';

export type HeadingTag = typeof Tag[keyof typeof Tag];

export interface Styles {
  size: string;
}

export type HeadingProps = ComponentPropsWithoutRef<Tag>;
