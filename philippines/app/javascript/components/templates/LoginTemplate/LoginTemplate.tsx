import React from 'react';
import { Link } from "react-router-dom";

export const LoginTemplate = () => {
    return (
        <main className="container mx-auto mt-28 px-5 flex">
            <div>
                <h1>Login</h1>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/">home</Link> |{" "}
                    <Link to="/login">login</Link>
                </nav>
            </div>
        </main>
    )
}