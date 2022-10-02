import { HeadingProps, HeadingTag, Styles } from './Heading.type';
import { Tag } from './Heading.const';
import React, { useMemo } from 'react';
import { getStyles } from './styles';

export const Heading = ({ ...props }: HeadingProps) => {
  const { tag: Tag = Tag.H1 } = props;
  const styles = useMemo<Styles>(() => getStyles(Tag), [Tag]);
  return (
    <Tag
      className={`font-bold leading-tight mt-0 mb-2 ${styles.size}`}
      {...props}
    />
  );
};
