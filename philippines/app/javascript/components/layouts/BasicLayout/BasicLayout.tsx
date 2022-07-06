import React, {FC} from 'react'
import {Outlet} from "react-router-dom";
import {Navbar} from "../../molecules/Navbar";
import {Footer} from "../../organisms/Footer";

export const BasicLayout: FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
}