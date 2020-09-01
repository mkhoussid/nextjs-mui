import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import theme from '_constants/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStore } from '_redux/store';

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    }, []);

    return (
        <>
            <Head>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}
