import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
    className?: string;
}

type NavLink = {
    text: string;
    href?: string;
}

const navLinks: NavLink[] = [
    {
        text: 'menu 1'
    },
    {
        text: 'menu 2'
    },
    {
        text: 'menu 3'
    },
]

const Header: React.FC<HeaderProps> = ({ className = ''}) => {
    return (
        <header className={`${className} bg-blue-500 py-4 px-10 flex justify-between items-center h-20`}>
            <a className="text-white text-2xl h-full w-20 flex items-center justify-center" href='/'>ANEEF</a>
            <nav className='h-full p-0 flex items-center justify-end gap-4'>
                <ThemeSwitcher />
                {navLinks.map(link => (
                    <a href={link.href ?? '#'} key={link.text}>{link.text}</a>
                ))}
            </nav>
        </header>
    );
};

export default Header;