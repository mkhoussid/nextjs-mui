import React from 'react';
import Head from 'next/head';
import { throttle } from 'lodash';
import Navbar from './Navbar';
import styled from 'styled-components';
import { getState } from '_redux/utils';
import Footer from './Footer';
import { COLORS } from '_constants/colors';
import useEventListener from '_hooks/useEventListener';

const MainLayout = ({ children }) => {
    const [title] = React.useState('My app');
    const [isScroll, setIsScroll] = React.useState(false);

    const scrollListener = React.useCallback((window) => {
        const scrollTop = window.document.documentElement.scrollTop;
        if (scrollTop > 80) setIsScroll(true);
        else setIsScroll(false);
    }, []);

    useEventListener({ eventName: 'scroll', handler: throttle(scrollListener, 100), dependencies: globalThis.window });

    return (
        <Main>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar isScroll={isScroll} />
            {children}
            <Footer />
        </Main>
    );
};

export default MainLayout;

const Main = styled.div`
    position: relative;
    background-color: ${COLORS.RED_1};
`;
