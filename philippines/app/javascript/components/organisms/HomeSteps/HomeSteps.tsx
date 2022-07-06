import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {HomeIcon} from "@heroicons/react/outline";
import {Step} from "../../molecules/Step";
import styles from "./styles.module.css";

export const HomeSteps: FC = () => {
    const {t} = useTranslation()
    const steps = [
        {
            label: t('steps.step1'),
            icon: HomeIcon,
        },
        {
            label: t('steps.step2'),
            icon: HomeIcon,
        },
        {
            label: t('steps.step3'),
            icon: HomeIcon,
        },
        {
            label: t('steps.step4'),
            icon: HomeIcon,
        },
    ]
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"><h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t('steps.title')}</h2></div>
                    <div className={styles.arrow} />
                    <div
                        className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-4 md:max-w-2xl lg:max-w-none">
                        {steps.map(s => <Step key={s.label} step={s} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}