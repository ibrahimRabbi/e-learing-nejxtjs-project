 import React from 'react';

const layout = ({ children, navbar, footer }: { children: React.ReactNode, navbar: React.ReactNode, footer: React.ReactNode }) => {
    return (
        <div>
            {navbar}
            {children}
            {footer}
        </div>
    );
};

export default layout;