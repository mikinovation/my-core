import React, {FC} from "react";
import {
    ChartBarIcon,
    ClockIcon,
    GlobeIcon,
    HomeIcon,
} from '@heroicons/react/outline'
import {Feature} from "../../molecules/Feature/Feature";

const features = [
    {
        name: 'ネイティブ講師',
        description: 'フィリピンの現地講師から直接学ぶことができます',
        icon: HomeIcon,
    },
    {
        name: 'フィリピンの言語に特化したサービス',
        description: 'フィリピンの言語を学ぶことに特化したサービスです',
        icon: GlobeIcon,
    },
    {
        name: '好きな時間に学習できる',
        description:
            '講師と時間を自由に調整できるので柔軟な時間帯の対応が可能です',
        icon: ClockIcon,
    },
    {
        name: 'レベルにあった学習',
        description:
            '講師と相談しながら学習者にあったレベルの授業を提供することができます',
        icon: ChartBarIcon,
    },
]

export const HomeFeatures: FC = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        サービスの特徴
                    </p>
                </div>
                <div className="mt-14">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => <Feature key={feature.name} feature={feature} />)}
                    </dl>
                </div>
            </div>
        </div>
    )
}