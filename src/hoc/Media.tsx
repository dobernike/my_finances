import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

type Props = {
    children: ReactNode;
};

const Desktop = ({ children }: Props) => {
    const isDesktop = useMediaQuery({ minWidth: 1200 });

    return isDesktop ? <>{children}</> : null;
};

const Tablet = ({ children }: Props) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });

    return isTablet ? <>{children}</> : null;
};

const DesktopOrTablet = ({ children }: Props) => {
    const isDesktopOrTabler = useMediaQuery({ minWidth: 768 });

    return isDesktopOrTabler ? <>{children}</> : null;
};

const Mobile = ({ children }: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return isMobile ? <>{children}</> : null;
};

export default { Desktop, Tablet, DesktopOrTablet, Mobile };
