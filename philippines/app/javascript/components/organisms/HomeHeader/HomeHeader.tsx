import React, {memo} from "react";

export const HomeHeader = memo(() => {
    return (
        <section className="w-full p-24">
            <div className="text-center">
                <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">Talk with Filipino</h1>
                <p className="max-w-[500px] mx-auto mt-6 mb-6 text-lg font-medium xl:max-w-lg md:text-xlxl:leading-snug lg:text-2xl">Have fan with speaking Filipino</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </div>
        </section>
    )})