import React, {FC} from "react";

interface Props {
    advantage: {
        title: string
        description: string
    }
}

export const Advantage: FC<Props> = ({advantage}: Props) => {
    return (
        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64"
                 xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                    <g strokeWidth="2">
                        <path className="stroke-current text-blue-300"
                              d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"></path>
                        <path className="stroke-current text-white"
                              d="M20.571 37.714h5.715L36.57 26.286h8"></path>
                        <path className="stroke-current text-blue-300" strokeLinecap="square"
                              d="M41.143 34.286l3.428 3.428-3.428 3.429"></path>
                        <path className="stroke-current text-white" strokeLinecap="square"
                              d="M41.143 29.714l3.428-3.428-3.428-3.429"></path>
                    </g>
                </g>
            </svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{advantage.title}</h4><p
            className="text-gray-600 text-center">{advantage.description}</p>
        </div>
    )
}