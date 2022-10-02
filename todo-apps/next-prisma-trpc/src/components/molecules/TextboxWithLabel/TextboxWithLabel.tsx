import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  useId,
} from 'react';
import { Textbox, TEXTBOX_BORDER_COLOR } from '../../atoms/Textbox/Textbox';

interface Props {
  className?: string;
  titleLevel?: 3 | 4 | 5 | 6;
  labelProps: Omit<
    ComponentPropsWithoutRef<'label'>,
    'htmlFor' | 'className'
  > & {
    title: string;
  };
  textboxProps: Omit<ComponentPropsWithRef<'input'>, 'id'>;
  description?: string;
  error?: string;
}

export const TextboxWithLabel = ({
  titleLevel = 3,
  labelProps: { title },
  description,
  error,
}: Props) => {
  const descriptionId = useId();
  const errorMessageId = useId();
  return (
    <div className="form-control w-full max-w-xs">
      <label role="heading" aria-level={titleLevel} className="label">
        <span className="label-text">{title}</span>
      </label>
      <Textbox
        color={error && TEXTBOX_BORDER_COLOR.ERROR}
        aria-describedby={descriptionId}
        aria-invalid={!!error}
        aria-errormessage={errorMessageId}
      />
      {description && (
        <label className="label">
          <span id={descriptionId} className="label-text-alt">
            {description}
          </span>
        </label>
      )}
      {error && (
        <label className="label">
          <span id={errorMessageId} className="label-text-alt text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
};
