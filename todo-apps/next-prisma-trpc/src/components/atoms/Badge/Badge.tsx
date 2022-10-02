import React from 'react';

export const BADGE_COLOR = {
  PRIMARY: 'badge-primary',
  SECONDARY: 'badge-secondary',
  ACCENT: 'badge-accent',
} as const;

export type BadgeColor = typeof BADGE_COLOR[keyof typeof BADGE_COLOR];

export const BADGE_SIZE = {
  MD: 'badge-md',
  LG: 'badge-lg',
} as const;

export type BadgeSize = typeof BADGE_SIZE[keyof typeof BADGE_SIZE];

interface Props {
  bgColor?: BadgeColor;
  size?: BadgeSize;
}

export const Badge = ({
  bgColor = BADGE_COLOR.PRIMARY,
  size = BADGE_SIZE.MD,
  ...props
}: Props) => {
  return <span className={`badge ${bgColor} ${size}`} {...props} />;
};
