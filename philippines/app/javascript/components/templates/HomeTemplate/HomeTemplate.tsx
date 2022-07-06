import React from 'react';
import {HomeHeader} from "../../organisms/HomeHeader";
import {HomeFeatures} from "../../organisms/HomeFeatures";
import {HomeAdvantages} from "../../organisms/HomeAdvantage";
import {HomeSteps} from "../../organisms/HomeSteps";

export const HomeTemplate = () => {
    return (
        <main className="container mx-auto mt-28 px-5">
            <HomeHeader />
            <HomeFeatures />
            <HomeAdvantages />
            <HomeSteps />
        </main>
    )
}