import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/* <meta name='theme-color' content={theme.palette.primary.main} /> */}
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const muiSheets = new ServerStyleSheets();
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => muiSheets.collect(styledComponentsSheet.collectStyles(<App {...props} />)),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {muiSheets.getStyleElement()}
                    {styledComponentsSheet.getStyleElement()}
                </>
            ),
        };
    } catch (err) {
        console.log('An error occurred in _document.tsx: ', err);
    } finally {
        styledComponentsSheet.seal();
    }
};
