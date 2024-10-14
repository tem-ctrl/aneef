'use client'

import { FC } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher: FC = ()  => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
            Toggle theme
        </button>
    );
}

export default ThemeSwitcher;
