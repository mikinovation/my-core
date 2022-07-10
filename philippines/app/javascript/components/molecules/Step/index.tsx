import React, { FC, memo } from 'react';

interface Props {
    step: {
        label: string
    }
}

const Step: FC = memo(({ step }: Props) => (
  <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
      <step.icon className="h-6 w-6" aria-hidden="true" />
    </div>
    <h4 className="text-xl font-bold leading-snug tracking-tight my-2 p-2">{step.label}</h4>
  </div>
));

export default Step;
