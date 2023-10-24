import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Discord Clone",
    description: "Login to your account",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body className='h-full flex items-center justify-center'>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
