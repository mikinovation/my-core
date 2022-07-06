import React, {memo} from "react";

export const Footer = memo(() => {
    return (
        <footer className="flex flex-col items-center justify-center w-full p-24">
            <p className="text-center text-gray-600">
                © {new Date().getFullYear()},
                {` `}
                Mikihiro Saito
            </p>
        </footer>
    )
})