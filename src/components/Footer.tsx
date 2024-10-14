import React from 'react';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = ''}) => {
    return (
        <footer className={`${className} bg-blue-500 px-10 flex justify-between items-center h-20`}>
            &copy; ANEEF
        </footer>
    );
};

export default Footer;