import React, {FC, ReactElement} from "react";

interface Props {
    feature: {
        title: string
        description: string
        icon: ReactElement
    }
}

export const Feature: FC<Props> = ({feature}) => {
    return (
        <div className="relative">
            <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
        </div>
    )
}