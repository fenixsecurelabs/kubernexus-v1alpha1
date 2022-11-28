import { Component } from 'react';
import Head from "next/head";
import { getPath } from "../../../packages/lib/path"
import NoSsr from '@mui/material/NoSsr';

class Error extends Component {
    componentDidMount(): void {
        console.log(`path: ${getPath()}`)
        // this.props.updatepagepath({ path : getPath() })
    }

    render() {
        return (
            <NoSsr>
                <Head>
                    <title>404 - Page Not Found</title>
                </Head>
            </NoSsr>
        );
    }
}

// const mapDispatchToProps = (dispatch: string) => ({ updatepagepath : bindActionCreators(updatepagepath, dispatch) })

// export default connect(null)(Error);

export default Error;