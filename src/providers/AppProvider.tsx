'use client'

import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children })  => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default AppProvider;
