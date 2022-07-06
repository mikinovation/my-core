import React, {FC} from "react";
import {
    ChartBarIcon,
    ClockIcon,
    GlobeIcon,
    HomeIcon,
} from '@heroicons/react/outline'
import {Feature} from "../../molecules/Feature/Feature";
import {useTranslation} from "react-i18next";

export const HomeFeatures: FC = () => {
    const { t } = useTranslation();
    const features = [
        {
            title: t('features.native_teachers.title'),
            description: t('features.native_teachers.description'),
            icon: HomeIcon,
        },
        {
            title: t('features.philippines.title'),
            description: t('features.philippines.description'),
            icon: GlobeIcon,
        },
        {
            title: t('features.anytime.title'),
            description: t('features.anytime.description'),
            icon: ClockIcon,
        },
        {
            title: t('features.level.title'),
            description: t('features.level.description'),
            icon: ChartBarIcon,
        },
    ]
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {t('features.title')}
                    </p>
                </div>
                <div className="mt-14">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => <Feature key={feature.title} feature={feature} />)}
                    </dl>
                </div>
            </div>
        </div>
    )
}