import { Tag } from './Heading.const';
import { HeadingTag, Styles } from './Heading.type';

export const getStyles = (tag: HeadingTag): Styles => {
  switch (tag) {
    case Tag.H1:
      return {
        size: 'text-5xl',
      };
    case Tag.H2:
      return {
        size: 'text-4xl',
      };
    case Tag.H3:
      return {
        size: 'text-4xl',
      };
    case Tag.H4:
      return {
        size: 'text-3xl',
      };
    case Tag.H5:
      return {
        size: 'text-2xl',
      };
    case Tag.H6:
      return {
        size: 'text-xl',
      };
    case Tag.SPAN:
      return {
        size: 'text-base',
      };
  }
};
