import React from 'react';
import PropTypes from 'prop-types';
import Document, { Html, Head, Main, NextScript } from "next/document";

class MesheryDocument extends Document {
    static getInitialProps: (ctx: any) => any;
    render() {
        return (
            <Html>
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}

/*
MesheryDocument.getInitialProps = (ctx) => {
    let pageContext;

    const page = ctx.renderPage((Component: any) => {
        const WrappedComponent = (props: any) => {
            pageContext = props.pageContext
        }

        WrappedComponent.propTypes = {
            pageContext: PropTypes.object.isRequired,
        };

        return WrappedComponent;
    });

    let css;
    if (pageContext) {
        // css = pageContext.sheetsRegistry.toString();
    }

    return {
        ...page,
        pageContext,
    }
}
*/

export default MesheryDocument;