import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Advantage from '../../molecules/Advantage';

const HomeAdvantages: FC = memo(() => {
  const { t } = useTranslation();
  const advantages = [
    {
      title: t('advantages.culture.title'),
      description: t('advantages.culture.description'),
    },
    {
      title: t('advantages.practice.title'),
      description: t('advantages.practice.description'),
    },
    {
      title: t('advantages.anytime.title'),
      description: t('advantages.anytime.description'),
    },
    {
      title: t('advantages.trust.title'),
      description: t('advantages.trust.description'),
    },
  ];
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"><h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t('advantages.title')}</h2></div>
          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 md:max-w-2xl lg:max-w-none"
          >
            {advantages.map((a) => <Advantage key={a.title} advantage={a} />)}
          </div>
        </div>
      </div>
    </section>
  );
});

export default HomeAdvantages;
